const onLoad = () => {
    const wrapper = document.getElementById('anim');
    if (!wrapper) {
        return;
    }
    const items = wrapper.getElementsByClassName('anim__item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add('run');
    }
};

export const initAnimation = (): void => {
    document.addEventListener('DOMContentLoaded', onLoad);
};
