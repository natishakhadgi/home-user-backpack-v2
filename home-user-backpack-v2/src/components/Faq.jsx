
function Faq(){
    var ButtonExpand = function (domNode) {
        this.domNode = domNode;
        this.keyCode = Object.freeze({
          'RETURN': 13
        });
    };

    ButtonExpand.prototype.init = function () {
        this.controlledNode = false;
        var id = this.domNode.getAttribute('aria-controls');
        if (id) {
          this.controlledNode = document.getElementById(id);
        }
        this.domNode.setAttribute('aria-expanded', 'false');
        this.hideContent();
        this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
        this.domNode.addEventListener('click', this.handleClick.bind(this));
        this.domNode.addEventListener('focus', this.handleFocus.bind(this));
        this.domNode.addEventListener('blur', this.handleBlur.bind(this));
    };

    ButtonExpand.prototype.showContent = function () {
        if (this.controlledNode) {
          this.controlledNode.style.display = 'block';
        }
    };
      
    ButtonExpand.prototype.hideContent = function () {
        if (this.controlledNode) {
          this.controlledNode.style.display = 'none';
        }
    };
      
    ButtonExpand.prototype.toggleExpand = function () {
        if (this.domNode.getAttribute('aria-expanded') === 'true') {
          this.domNode.setAttribute('aria-expanded', 'false');
          this.hideContent();
        }
        else {
          this.domNode.setAttribute('aria-expanded', 'true');
          this.showContent();
        }
    };
      
    ButtonExpand.prototype.handleKeydown = function (event) {
        console.log('[keydown]');
        switch (event.keyCode) {
          case this.keyCode.RETURN:
            this.toggleExpand();
            event.stopPropagation();
            event.preventDefault();
            break;
          default:
            break;
        }
    };
      
    ButtonExpand.prototype.handleClick = function (event) {
        this.toggleExpand();
    };
      
    ButtonExpand.prototype.handleFocus = function (event) {
        this.domNode.classList.add('focus');
    };
      
    ButtonExpand.prototype.handleBlur = function (event) {
        this.domNode.classList.remove('focus');
    };
      
    window.addEventListener('load', function (event) {
        var buttons =  document.querySelectorAll('button[aria-expanded][aria-controls]');
        console.log("length: " + buttons.length)
        for (var i = 0; i < buttons.length; i++) {
          var be = new ButtonExpand(buttons[i]);
          be.init();
        }
    }, false);

    return (
        <dl class="faq">
            <dt><button class = "faqButton" aria-expanded="true" aria-controls="faq1_desc">what is the purpose of HUB?</button></dt>
            <dd>
                <p id="faq1_desc" class="desc">
                    we crowdsource all the fun, remote activities on the internet and organize them into one centralized hub to make <span class="yellow">event planning easier</span> 4 ya and <span class="yellow">diversify the options</span> at these online social events~. this website is open source, so literally everyone can submit an activity to hub. 😎 please take a moment to appreciate the abundance of options here
                </p>
            </dd>
            <dt><button class = "faqButton" aria-expanded="false" aria-controls="faq2_desc">how did HUB come about?</button></dt>
            <dd>
                <p id="faq2_desc" class="desc">
                    on feburary 5, 2021, 4 broke college students came together (socially distanced ofc) to participate in the <span class="yellow">2021 femme hacks hackathon</span>.
                </p>
            </dd>
            <dt><button class = "faqButton" aria-expanded="false" aria-controls="faq3_desc">who do we serve?</button></dt>
            <dd>
                <p id="faq3_desc" class="desc">
                    1) other college student who feel the pain of having our college social activities be online <br />2) as student leaders, we know how hard it is to come up with fun socials for which people are willing to do another zoom call <br />3) business owners, who want to easier access to <q>icebreakers</q> for team-building and meeting new co-workers
                </p>
            </dd>
            <dt>
                <button class = "faqButton" aria-expanded="false" aria-controls="faq4_desc">what categories does HUB offer?</button>
            </dt>
            <dd>
                <p id="faq4_desc" class="desc">
                    thanks for your interest. currently, we have 7 filter options to personalize your experiences: games, physical, mental health, group activity, single player, and free. if you want to offer new resources, submit the new ideas form.
                </p>
            </dd>
            <dt><button class = "faqButton" aria-expanded="false" aria-controls="faq5_desc">i have a resource i want to add. what do i do?</button>
            </dt>
            <dd>
                <p id="faq5_desc" class="desc">
                    perfect! you can <span class="yellow">submit</span> your resource and it’ll be added shortly.
                </p>
            </dd>
    </dl>
    );
}

export default Faq;