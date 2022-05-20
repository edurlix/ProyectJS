$(document).ready(function(){
    //slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({ // creando el slider
            mode: 'fade',
            pager: false,
            controls: false,
            auto: true,
            autoStart: true
        });
    }


    //posts
    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: `Published ${moment().format("MMMM")} ${moment().day()} ${moment().format("YYYY")}`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ante at sagittis feugiat. Maecenas quis nisi non ex suscipit suscipit. Proin felis est, molestie et pulvinar eget, porttitor sit amet nunc. Nam hendrerit tincidunt justo quis laoreet. In et tincidunt risus. Donec ullamcorper, enim nec sodales fringilla, ligula velit pretium arcu, eget dignissim enim mauris vitae diam. Proin porta sodales libero a mattis. Maecenas auctor magna quis purus tempor, ac suscipit lectus laoreet. Donec eu ultrices tellus, et sollicitudin purus. Vestibulum consequat bibendum ex non auctor. Ut blandit lacinia pharetra. Pellentesque sollicitudin accumsan neque, id luctus tortor semper nec. Pellentesque ac libero eu metus sodales mollis.'
        },
        {
            title: 'Prueba de titulo 2',
            date: `Published ${moment().format("MMMM")} ${moment().day()} ${moment().format("YYYY")}`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ante at sagittis feugiat. Maecenas quis nisi non ex suscipit suscipit. Proin felis est, molestie et pulvinar eget, porttitor sit amet nunc. Nam hendrerit tincidunt justo quis laoreet. In et tincidunt risus. Donec ullamcorper, enim nec sodales fringilla, ligula velit pretium arcu, eget dignissim enim mauris vitae diam. Proin porta sodales libero a mattis. Maecenas auctor magna quis purus tempor, ac suscipit lectus laoreet. Donec eu ultrices tellus, et sollicitudin purus. Vestibulum consequat bibendum ex non auctor. Ut blandit lacinia pharetra. Pellentesque sollicitudin accumsan neque, id luctus tortor semper nec. Pellentesque ac libero eu metus sodales mollis.'
        },
        {
            title: 'Prueba de titulo 3',
            date: `Published ${moment().format("MMMM")} ${moment().day()} ${moment().format("YYYY")}`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ante at sagittis feugiat. Maecenas quis nisi non ex suscipit suscipit. Proin felis est, molestie et pulvinar eget, porttitor sit amet nunc. Nam hendrerit tincidunt justo quis laoreet. In et tincidunt risus. Donec ullamcorper, enim nec sodales fringilla, ligula velit pretium arcu, eget dignissim enim mauris vitae diam. Proin porta sodales libero a mattis. Maecenas auctor magna quis purus tempor, ac suscipit lectus laoreet. Donec eu ultrices tellus, et sollicitudin purus. Vestibulum consequat bibendum ex non auctor. Ut blandit lacinia pharetra. Pellentesque sollicitudin accumsan neque, id luctus tortor semper nec. Pellentesque ac libero eu metus sodales mollis.'
        },
        {
            title: 'Prueba de titulo 4',
            date: `Published ${moment().format("MMMM")} ${moment().day()} ${moment().format("YYYY")}`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ante at sagittis feugiat. Maecenas quis nisi non ex suscipit suscipit. Proin felis est, molestie et pulvinar eget, porttitor sit amet nunc. Nam hendrerit tincidunt justo quis laoreet. In et tincidunt risus. Donec ullamcorper, enim nec sodales fringilla, ligula velit pretium arcu, eget dignissim enim mauris vitae diam. Proin porta sodales libero a mattis. Maecenas auctor magna quis purus tempor, ac suscipit lectus laoreet. Donec eu ultrices tellus, et sollicitudin purus. Vestibulum consequat bibendum ex non auctor. Ut blandit lacinia pharetra. Pellentesque sollicitudin accumsan neque, id luctus tortor semper nec. Pellentesque ac libero eu metus sodales mollis.'
        },
        {
            title: 'Prueba de titulo 5',
            date: `Published ${moment().format("MMMM")} ${moment().day()} ${moment().format("YYYY")}`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ante at sagittis feugiat. Maecenas quis nisi non ex suscipit suscipit. Proin felis est, molestie et pulvinar eget, porttitor sit amet nunc. Nam hendrerit tincidunt justo quis laoreet. In et tincidunt risus. Donec ullamcorper, enim nec sodales fringilla, ligula velit pretium arcu, eget dignissim enim mauris vitae diam. Proin porta sodales libero a mattis. Maecenas auctor magna quis purus tempor, ac suscipit lectus laoreet. Donec eu ultrices tellus, et sollicitudin purus. Vestibulum consequat bibendum ex non auctor. Ut blandit lacinia pharetra. Pellentesque sollicitudin accumsan neque, id luctus tortor semper nec. Pellentesque ac libero eu metus sodales mollis.'
        },

    ];

    posts.forEach((item, index)=>{
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
    </article>
        `;
        $('#posts').append(post);  //ponemos que se muestre todo eso en el div posts
    });
    }
    //select theme
    var theme = $('#theme'); //es el id del link css
    $('#to-green').click(function(){
        theme.attr('href','hojas.css')
    });
    $('#to-red').click(function(){
        theme.attr('href','rojo.css')
    });
    $('#to-blue').click(function(){
        theme.attr('href','cielo.css')
    });

    //scroll arriba
    $('.up').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //login falso
    $('#login form').submit(function(){
       var form_name = $('#name').val();
        localStorage.setItem('name', form_name);
    });
    
    var form_name = localStorage.getItem('name');
    if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $("#about p");
        about_parrafo.html(`<strong>Bienvenido, ${form_name}</strong>`);
        about_parrafo.append('<a href="#" id="logout">Cerrar Sesion</a>');
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            window.reload();
        });
    }

    //Accordion
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }

    //Reloj
    if(window.location.href.indexOf('Reloj') > -1){

        setInterval(function(){  //el setInterval es como un bucle pero en live 
            var reloj = moment().format('h:mm:ss a');
            $("#reloj").html(reloj);
        },1000);
    }
});
