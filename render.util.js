export function renderBeanieBabies(beanieBaby) {
    const beaniebabyEl = document.createElement('li');
    beaniebabyEl.classList.add('card');

    const img = document.createElement('img');
    img.src = beanieBaby.image;
    img.alt = beanieBaby.title;

    const content = document.createElement('div');
    content.classList.add('content');

    const h2 = document.createElement('h2');
    h2.textContent = beanieBaby.title;

    const attributes = document.createElement('p');
    attributes.classList.add('attributes');

    const animal = document.createElement('span');
    animal.textContent = beanieBaby.animal;

    const theme = document.createElement('span');
    theme.textContent = beanieBaby.theme;

    const astroSign = document.createElement('span');
    astroSign.textContent = beanieBaby.astroSign;

    attributes.append(animal, theme, astroSign);

    const released = document.createElement('p');
    released.classList.add('released');
    released.textContent = `Released ${beanieBaby.releaseYear}`;

    content.append(h2, attributes, released);

    beaniebabyEl.append(img, content);

    return beaniebabyEl;
}

export function renderAstrologySigns(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}
