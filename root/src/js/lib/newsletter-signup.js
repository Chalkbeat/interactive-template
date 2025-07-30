// add to the page with <newsletter-signup></newsletter-signup>
import m from "./dom.js";

const ENDPOINT = "https://newsletters-arcxp.civic-news-company-it.workers.dev";
const RECAP_KEY = "6LckrOMmAAAAAKSCiwGzwdj6HN3FaT2LmVDtr1uf";

var defaultData = {
  website: "chalkbeat",
  interest_ids: ["9907031392"]
};

export class NewsletterSignup extends HTMLElement {

  connectedCallback() {
    // put contents in the light DOM for easier styling
    // recaptcha really doesn't like the shadow DOM
    if (this.input) return;
    var root = this;
    root.append(
      this.input = m("input"),
      this.button = m("button", "Sign me up!"),
      this.status = m("div.status"),
      this.reContainer = m("g-recaptcha.g-recaptcha", {
        "data-size": "invisible",
        "data-sitekey": RECAP_KEY,
      })
    );
    this.input.addEventListener("focus", this);
    this.button.addEventListener("click", this);
    this.button.innerHTML = `<svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5219 0.229004H3.32188C2.00188 0.229004 0.933875 1.309 0.933875 2.629L0.921875 17.029C0.921875 18.349 2.00188 19.429 3.32188 19.429H22.5219C23.8419 19.429 24.9219 18.349 24.9219 17.029V2.629C24.9219 1.309 23.8419 0.229004 22.5219 0.229004ZM21.3219 17.029H4.52188C3.86188 17.029 3.32188 16.489 3.32188 15.829V5.029L11.6499 10.237C12.4299 10.729 13.4139 10.729 14.1939 10.237L22.5219 5.029V15.829C22.5219 16.489 21.9819 17.029 21.3219 17.029ZM12.9219 8.629L3.32188 2.629H22.5219L12.9219 8.629Z"
            fill="currentColor"></svg> Sign me up!`;
  }

  handleEvent(e) {
    this.status.innerHTML = "";
    switch (e.type) {
      case "focus":
        // start preload
        this.getRecaptcha();
        break;

      case "click":
        this.submit();
        break;
    }
  }

  getRecaptcha() {
    if (!this.rePromise) {
      this.rePromise = new Promise((ok, fail) => {
        var onload = `recaptchaLoaded${Date.now()}`;
        var script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAP_KEY}`;
        this.append(script);
        script.onerror = fail;
        script.onload = window[onload] = async (e) => {
          var recap = window.grecaptcha.enterprise || window.grecaptcha;
          await new Promise(ok => recap.ready(ok));
          // recap.render(this.reContainer, { sitekey: RECAP_KEY });
          console.log("reCaptcha is ready...");
          ok(recap)
        };
      });
    }
    return this.rePromise;
  }

  async submit() {
    var email = this.input.value;
    if (!email) return this.status.innerHTML = "Please provide an e-mail address.";
    var { execute } = await this.getRecaptcha();
    console.log("Getting verification token...");
    var token = await execute(RECAP_KEY, { action: "newsletter" });
    console.log(`Got token (${token.length} characters)...`);
    var data = {
      ...defaultData,
      email,
      "g-recaptcha-response": token
    };
    this.status.innerHTML = "Submitting your e-mail address..."
    var response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(r => r.text());
    if (response == "ok") {
      this.status.innerHTML = "Thanks! Check your e-mail to finish signing up.";
    } else {
      this.status.innerHTML = `Sign-up failed ("${response}"), please visit <a href="https://chalkbeat.org/chicago">Chalkbeat Chicago</a> to sign up.`;
    }
  }
}

customElements.define("newsletter-signup", NewsletterSignup);