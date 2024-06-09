function showSeason(season) {
    const titleElement = document.getElementById('season-title');
    const imageElement = document.getElementById('season-image');

    let title = '';
    let imageUrl = '';

    switch (season) {
        case 'spring':
            title = 'Welcome to Spring';
            imageUrl = 'image/spring.jpg'; 
            break;
        case 'summer':
            title = 'Welcome to Summer';
            imageUrl = 'image/summer.jpg'; 
            break;
        case 'autumn':
            title = 'Welcome to Autumn';
            imageUrl = 'image/autumn.jpg';  
            break;
        case 'winter':
            title = 'Welcome to Winter';
            imageUrl = 'image/Winter_forest_silver.jpg'; 
            break;
    }

    titleElement.textContent = title;
    imageElement.src = imageUrl;
}

