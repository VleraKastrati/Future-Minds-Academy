(function() {
    let originalTitle = document.title;
    let originalFavicon = document.querySelector("link[rel='icon']") ? document.querySelector("link[rel='icon']").getAttribute('href') : '';
    let notificationInterval;

    function startNotification(text) {
        endNotification();

        let bellIconLink = document.createElement('link');
        bellIconLink.rel = 'icon';
        bellIconLink.href = 'https://www.iconfinder.com/icons/2990628/rocket_space_icon';

        let isOriginal = true;
        notificationInterval = setInterval(() => {
            if (isOriginal) {
                document.title = text;
                if (originalFavicon) {
                    document.querySelector("link[rel='icon']").setAttribute('href', bellIconLink.href);
                } else {
                    document.head.appendChild(bellIconLink);
                }
            } else {
                document.title = originalTitle;
                if (originalFavicon) {
                    document.querySelector("link[rel='icon']").setAttribute('href', originalFavicon);
                } else {
                    if (document.head.contains(bellIconLink)) {
                        document.head.removeChild(bellIconLink);
                    }
                }
            }
            isOriginal = !isOriginal;
        }, 1000);
    }

    function endNotification() {
        if (notificationInterval) {
            clearInterval(notificationInterval);
            document.title = originalTitle;
            if (originalFavicon) {
                document.querySelector("link[rel='icon']").setAttribute('href', originalFavicon);
            } else {
                let bellIconLink = document.querySelector("link[rel='icon'][href='https://www.iconfinder.com/icons/2990628/rocket_space_icon']");
                if (bellIconLink) {
                    document.head.removeChild(bellIconLink);
                }
            }
        }
    }

    window.startNotification = startNotification;
    window.endNotification = endNotification;
})();
