if ($(window).width() > 767) {
document.addEventListener("DOMContentLoaded", function() {
  var lastElementClicked;
  Barba.Pjax.init();
  Barba.Prefetch.init();

  Barba.Dispatcher.on('linkClicked', function(el) {
    lastElementClicked = el;
  });

  var ExpandTransition = Barba.BaseTransition.extend({
    start: function() {
      this.originalThumb = lastElementClicked;

      Promise
        .all([this.newContainerLoading, this.enlargeThumb()])
        .then(this.showNewPage.bind(this));
    },

    enlargeThumb: function() {
      var deferred = Barba.Utils.deferred();
      var thumbPosition = this.originalThumb.getBoundingClientRect();

      this.cloneThumb = this.originalThumb.cloneNode(true);
      this.cloneThumb.style.position = 'absolute';
      this.cloneThumb.style.top = thumbPosition.top + 'px';
      this.cloneThumb.style.left = thumbPosition.left + 'px';
      this.cloneThumb.style.right = thumbPosition.right + 'px';

      this.oldContainer.appendChild(this.cloneThumb);

      TweenLite.to(this.cloneThumb, 0.3, {
        left: 0,
        right: 0,
        width: window.innerWidth,
        onComplete: function() {
          deferred.resolve();
        }
      });

      return deferred.promise;
    },

    showNewPage: function() {
      this.newContainer.style.visibility = 'visible';
      this.done();
    }
  });


  var ShrinkTransition = Barba.BaseTransition.extend({
    start: function() {
      this.newContainerLoading.then(this.shrinkImage.bind(this));
    },

    shrinkImage: function() {
      var _this = this;

      this.oldContainer.style.zIndex = '10';
      this.newContainer.style.visibility = 'visible';

      var href = Barba.HistoryManager.prevStatus().url.split('/').pop();
      var destThumb = this.newContainer.querySelector('a.intro-thumb[href="' + href + '"]');
      var destThumbPosition = destThumb.getBoundingClientRect();
      var fullImage = this.oldContainer.querySelector('.full');
      console.log(destThumb);
      $('.selector').scrollLeft(destThumbPosition.left);
      destThumbPosition = destThumb.getBoundingClientRect();
      $(".barba-container").animate({ scrollTop: 0 }, 300);
      TweenLite.to(this.oldContainer.querySelector('.back'), 0.2, { opacity: 0 });

      TweenLite.to(fullImage, 0.3, { 
        delay: 0.5,
        left: destThumbPosition.left,
        right: destThumbPosition.right,
        width: destThumb.clientWidth,
        onComplete: function() {
          _this.done();
        }
      });
    }
  });

  Barba.Pjax.getTransition = function() {
    var transitionObj = ExpandTransition;

    if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
      transitionObj = ShrinkTransition;
    }

    return transitionObj;
  };

});
}