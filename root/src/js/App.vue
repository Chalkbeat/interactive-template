<template>
  <div>
    <div class="app-intro-content container">
      <h1 class="app-title" v-html="mdInline(copy.headline)"></h1>
      <h3 v-html="md(copy.subhed)"></h3>
      <p
        v-for="(p, index) in copy.intro"
        v-bind:key="'intro-' + index" v-bind:copy="p">
        {{ p }}
      </p>
      <div class="share-buttons">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://chalkbeat.org/posts/us/2019/06/13/2020-democratic-candidates-education/" target="_blank" class="button button-background-light-gray share-button btn-facebook">
        <svg viewBox="0 0 12 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.09049 1.23636C5.02638 0.345218 6.35756 0.0442284 7.61331 0.00671382C8.9414 -0.00522792 10.269 0.00199546 11.5971 0.00251973C11.6023 1.40355 11.6028 2.8051 11.5965 4.20607C10.7383 4.20456 9.87938 4.20817 9.02109 4.20456C8.47684 4.17065 7.91797 4.58319 7.81905 5.12273C7.80601 6.06018 7.81434 6.99816 7.81486 7.93568C9.07369 7.94086 10.3325 7.9341 11.5913 7.93882C11.4991 9.295 11.3309 10.645 11.1336 11.9898C10.0216 12.0002 8.90907 11.9887 7.79721 11.9955C7.78731 15.9954 7.80239 19.9953 7.7894 23.9952C6.13783 24.002 4.48527 23.9921 2.83376 23.9999C2.80248 19.9995 2.83632 15.997 2.81657 11.996C2.01083 11.9877 1.20461 12.0018 0.398926 11.9893C0.402013 10.6445 0.399973 9.29983 0.40044 7.95554C1.2056 7.9457 2.01135 7.95764 2.81657 7.94983C2.84104 6.64253 2.79205 5.33372 2.84209 4.02753C2.92283 2.99308 3.31708 1.95089 4.09049 1.23636Z" fill="white"/>
        </svg>
        </a>
        <a href="https://twitter.com/share?text=2020 cheat sheet: What the Democratic presidential candidates have said about education&url=https://chalkbeat.org/posts/us/2019/06/13/2020-democratic-candidates-education/" target="_blank" class="button button-background-light-gray share-button btn-twitter">
        <svg viewBox="0 0 25 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.04752 19.7505C17.1042 19.7505 22.0578 12.2472 22.0578 5.74027C22.0578 5.52715 22.0578 5.315 22.0434 5.1038C23.007 4.40675 23.8389 3.54368 24.5 2.555C23.6013 2.95321 22.648 3.21435 21.6718 3.32972C22.6998 2.71434 23.4691 1.74646 23.8366 0.606196C22.8701 1.17975 21.8126 1.58397 20.7099 1.8014C19.9675 1.01197 18.9856 0.489237 17.9162 0.31408C16.8468 0.138923 15.7494 0.321111 14.794 0.832449C13.8385 1.34379 13.0782 2.15577 12.6307 3.14274C12.1833 4.12972 12.0735 5.23666 12.3186 6.29227C10.3609 6.19413 8.44572 5.68539 6.69741 4.79908C4.9491 3.91277 3.40672 2.6687 2.1704 1.14764C1.54073 2.23163 1.34787 3.51486 1.6311 4.73606C1.91433 5.95725 2.65234 7.02459 3.69488 7.72076C2.91127 7.69753 2.14475 7.48614 1.46 7.10444C1.46 7.1246 1.46 7.14571 1.46 7.16683C1.46031 8.30368 1.85385 9.40543 2.57387 10.2852C3.29389 11.165 4.29606 11.7686 5.4104 11.9937C4.68547 12.1914 3.92488 12.2203 3.18704 12.0782C3.50169 13.0566 4.11427 13.9122 4.93911 14.5253C5.76395 15.1384 6.75979 15.4784 7.78736 15.4977C6.04375 16.868 3.88982 17.6119 1.67216 17.6097C1.28039 17.609 0.888996 17.5852 0.5 17.5387C2.75181 18.9837 5.37192 19.7502 8.04752 19.7467" fill="white"/>
        </svg>
        </a>
        <a href="mailto:?&subject=Chalkbeat: 2020%20cheat%20sheet%3A%20What%20the%20Democratic%20presidential%20candidates%20have%20said%20about%20education&body=2020%20cheat%20sheet%3A%20What%20the%20Democratic%20presidential%20candidates%20have%20said%20about%20education%0Ahttps%3A%2F%2Fchalkbeat.org%2Fposts%2Fus%2F2019%2F06%2F13%2F2020-democratic-candidates-education%2F%3Futm_source%3Demail_button" class="button button-background-light-gray share-button btn-email">
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5219 0.229004H3.32188C2.00188 0.229004 0.933875 1.309 0.933875 2.629L0.921875 17.029C0.921875 18.349 2.00188 19.429 3.32188 19.429H22.5219C23.8419 19.429 24.9219 18.349 24.9219 17.029V2.629C24.9219 1.309 23.8419 0.229004 22.5219 0.229004ZM21.3219 17.029H4.52188C3.86188 17.029 3.32188 16.489 3.32188 15.829V5.029L11.6499 10.237C12.4299 10.729 13.4139 10.729 14.1939 10.237L22.5219 5.029V15.829C22.5219 16.489 21.9819 17.029 21.3219 17.029ZM12.9219 8.629L3.32188 2.629H22.5219L12.9219 8.629Z" fill="white"/>
        </svg>
        </a>
      </div>
      <div class="app-updates" v-if="copy.updates.length > 0">
        <h5>Recent updates</h5>
        <ul>
          <li
            v-for="(p, index) in copy.updates"
            v-bind:key="'updates-' + index" v-bind:copy="p">
            <p v-html="md(p)"></p>
          </li>
        </ul>
      </div>
      <div id="Toggle" class="button-group">
        <a :class="$route.path.split('/')[1] + ' button button-background-dark-teal'"
          id="candidates-button"
          v-on:click="triggerComponent('candidates')"
          href="./index.html#/candidates">
          Candidates
        </a>
        <a :class="$route.path.split('/')[1] + ' button button-background-dark-teal'"
          id="issues-button"
          v-on:click="triggerComponent('issues')"
          href="./index.html#/issues">
          Issues
        </a>
      </div>
    </div>
    <router-view v-bind:copy="copy"></router-view>
    <div class="container credit" v-html="md(copy.credit)"></div>
  </div>
</template>

<script>
  var archieml = require("archieml");
  var md = require("markdown-it")();
  var copy = require("./data/copy.docs.txt");
  copy = archieml.load(copy);

  var issues = [];
  var issues_list = [];

  function issueLoop(data) {
    var base = data.candidates;
    for(let i=0;i<base.length;i++) {
      var candidate = base[i].content;
      for(let a=0;a<candidate.length;a++) {
        var content = candidate[a];
        content.name = base[i].short_name;
        issues.push(content);
      }
    }
  }

  issueLoop(copy);
  copy.issues_full = issues;

  function issueCount(data) {
    var base = data.issues_full;
    for(let i=0;i<data.issues.length;i++) {
      var issue = data.issues[i].category;
      var count = 0;
      for(let a=0;a<base.length;a++) {
        if(base[a].category == issue) {
          data.issues[i].candidates ?
            data.issues[i].candidates = data.issues[i].candidates + ' ' + base[a].name :
            data.issues[i].candidates = base[a].name;
          count++;
        }
      }
      data.issues[i].count = count;
    }
  }

  issueCount(copy);

  module.exports =  {
    name: 'app',
    data(){ return {
      copy: copy,
      issues: issues,
    } },
    methods: {
      triggerComponent: function(view) {
        this.currentView = view;
      },
      md: function(input) {
        return md.render(input);
      },
      mdInline: function(input) {
        return md.renderInline(input);
      }
    },
  }

</script>

<style scoped></style>
