$(function() {
    (function toggleMini() {
        var $toggleButton = $('.sdeth-tog');
        var $toggleShift = $('.sdeth-top');

        function toggleMini() {
            if (!$toggleButton.hasClass('sdeth-togg')) {
                $toggleButton.addClass('sdeth-togg');
                $toggleShift.addClass('sdeth-togged');
            } else {
                $toggleButton.removeClass('sdeth-togg');
                $toggleShift.removeClass('sdeth-togged');
            }
        }

        $toggleButton.on('click', toggleMini);
    })();
});