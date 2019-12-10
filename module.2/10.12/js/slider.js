; + function() {
    window.Slider = class {
        constructor(dom, arr) {
            let ul = document.createElement('ul');

            ul.classList.add("slider");

            this.slides = []; //this._slides ставят вот так когда просто хотят сказать что эо внутрение свойство и его не трогать
            this.curSlide = 0;

            for (let i = 0; i < arr.length; i++) {
                let li = document.createElement('li');
                let img = document.createElement('img');
                img.setAttribute("src", arr[i]);
                li.appendChild(img);
                ul.appendChild(li);
                this.slides.push(li);
            }

            dom.appendChild(ul);
        }


        run() {
            this.nextSlide();
            setInterval(() => (this.nextSlide()), 4000);
            /* let self = this;
            setInterval(function(){
                self.nextSlide();
            }, 4000);
            */
        }

        nextSlide() {
            this.slides[this.curSlide].classList.remove("active");
            this.curSlide++;
            this.curSlide = this.curSlide < this.slides.length ? this.curSlide : 0;
            this.slides[this.curSlide].classList.add("active");
        }
    }
}();