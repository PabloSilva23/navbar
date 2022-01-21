const ball = document.getElementById('circle');
const nav = document.getElementById('item');
const home1 = document.getElementById('home1');
const home2 = document.getElementById('home2');
const home3 = document.getElementById('home3');
const home4 = document.getElementById('home4');
const body = document.querySelector('body');


function item(n) {
        if(n == 8 + 'px') {
            ball.style.left = n;
            home1.style.transform = 'scale(1.3)';
            home1.style.transition = .3 + 's';
            home3.style.transform = 'scale(1)';
            home4.style.transform = 'scale(1)';
            home2.style.transform = 'scale(1)';
            home1.style.color = 'forestgreen'
            home2.style.color = '#3d3c3c'
            home3.style.color = '#3d3c3c'
            home4.style.color = '#3d3c3c'
            body.style.background = 'forestgreen'
        }
        if (n == 83 + 'px') {
            ball.style.left = n;
            home2.style.transform = 'scale(1.3)';
            home2.style.transition = .3 + 's';
            home1.style.transform = 'scale(1)';
            home3.style.transform = 'scale(1)';
            home4.style.transform = 'scale(1)';
            home2.style.color = 'lightseagreen'
            home1.style.color = '#3d3c3c'
            home3.style.color = '#3d3c3c'
            home4.style.color = '#3d3c3c'
            body.style.background = 'lightseagreen'
        }
        if (n == 159 + 'px') {
            ball.style.left = n;
            home3.style.transform = 'scale(1.3)';
            home2.style.transform = 'scale(1)';
            home3.style.transition = .3 + 's'
            home1.style.transform = 'scale(1)';
            home4.style.transform = 'scale(1)';
            home3.style.color = 'rgb(206, 6, 6)'
            home2.style.color = '#3d3c3c'
            home1.style.color = '#3d3c3c'
            home4.style.color = '#3d3c3c'
            body.style.background = 'rgb(206, 0, 0)'

        }
        if (n == 232 + 'px') {
            ball.style.left = n;
            home4.style.transform = 'scale(1.3)';
            home4.style.transition = .3 + 's'
            home1.style.transform = 'scale(1)';
            home3.style.transform = 'scale(1)';
            home2.style.transform = 'scale(1)';
            home4.style.color = 'midnightblue'
            home2.style.color = '#3d3c3c'
            home3.style.color = '#3d3c3c'
            home1.style.color = '#3d3c3c'
            body.style.background = 'rgb(49, 49, 209)'
        }
}