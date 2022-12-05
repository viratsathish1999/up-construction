$('.slide-row').owlCarousel({
    right: true,
    items:2,
	loop:true,
    margin:15,
	autoplay:true,
    responsive:{
		0:{
			items:1
		},
        600:{
            items:2
        },
		1000:{
			items:2
		}
    }
});

$('.g-slide').owlCarousel({
    center: true,
    items:2,
	loop:true,
    margin:0,
	autoplay:true,
    responsive:{
		0:{
			items:1
		},
        
    }
});