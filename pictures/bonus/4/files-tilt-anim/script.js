(function() {
    let addTilt = (select) => {
        if (select) {
            $(select).tilt({
                maxTilt: 5,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                perspective: 500,
                glare: true,
                maxGlare: .2
            });
        }
    };

    //addTilt('ПУТЬ ДО ЭЛЕМЕНТА');
})();