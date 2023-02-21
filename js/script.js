{
  'use strict';
  /*
 document.getElementById('test-button').addEventListener('click', function(){
 const links = document.querySelectorAll('.titles a');
 console.log('links:', links);
 })   */

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */

    console.log('targetArticle:', targetArticle);
    targetArticle.classList.add('active');
  };

  /* New task */

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post .post-author';

  function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log('Title list: ',titleList);

    titleList.innerHTML = '';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for (let article of articles) {

      /* get the article id */

      const articleId = article.getAttribute('id');

      /* find and get the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('Title: ',articleTitle);

      /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('html',linkHTML);

      /* insert link into titleList */

      html = html + linkHTML;
    }
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);

    for (let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks();

  /* Add Tags */

  function generateTags(){

    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */

    for (let article of articles) {

      /* find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */

      let html = '';

      /* get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      /* split tags into array */

      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* START LOOP: for each tag */

      for (let tag of articleTagsArray) {
        console.log(tag);

        /* generate HTML of the link */

        const linkHTML = '<li><a href="#tag-'+ tag +'"><span>'+ tag +'</span></a></li>';
        console.log('html', linkHTML);

        /* add generated code to html variable */

        html = html + linkHTML;

        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;

      /* END LOOP: for every article: */
    }

  }
  generateTags();


  /* Fourth task */

  function tagClickHandler(event) {

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */

    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */
    for (let activeTagLink of activeTagLinks) {

      /* remove class active */
      activeTagLink.classList.remove('active');


    } /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */
    const hrefTagLinks = document.querySelectorAll('[href^="#tag-"]');

    /* START LOOP: for each found tag link */
    for (let hrefTagLink of hrefTagLinks) {

      /* add class active */
      hrefTagLink.classList.add('active');

      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags() {
    /* find all links to tags */

    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */

    for (const tagLink of tagLinks) {

      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click',tagClickHandler);

    }/* END LOOP: for each link */
  }
  addClickListenersToTags();


  // Add author
  function generateAuthors() {

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find author wrapper */

      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      console.log('authorWrapper', authorWrapper);

      /* make html variable with empty string */
      let html = '';

      /* get author from data-author attribute */
      const authorName = article.getAttribute('data-author');

      /* generate HTML of the link */
      const authorLinkHTML= `<p class="post-author"><a href="#author-${authorName}"><span>${authorName}</span></a></p>`;

      /* add generated code to html variable */
      html = html + authorLinkHTML;

      /* insert HTML of the links into the author wrapper */
      authorWrapper.innerHTML = html;
    }
    /* END LOOP: for every article */

  }
  generateAuthors();

  const authorClickHandler = function (event) {

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('Link was clicked!');

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "articleAuthor" and extract data from the "href" constant */
    const articleAuthor = href.replace('#author-', '');

    /* find all author links with class active */
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

    /* START LOOP: for each active author link */
    for (let activeAuthor of activeAuthors) {

      /* remove class active */
      activeAuthor.classList.remove('active');

      /* END LOOP: for each active author link */
    }
    /* find all author links with "href" attribute equal to the "href" constant */

    const hrefAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found author link */
    for (let hrefAuthorLink of hrefAuthorLinks) {

      /* add class active */
      hrefAuthorLink.classList.add('active');

      /* END LOOP: for each found author link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + articleAuthor + '"]');
  };

  function addClickListenersToAuthors() {
    /* find all links to authors */

    const authorLinks = document.querySelectorAll('a[href^="#author-"]');

    /* START LOOP: for each link */

    for (const authorLink of authorLinks) {

      /* add authorClickHandler as event listener for that link */
      authorLink.addEventListener('click',authorClickHandler);

    }/* END LOOP: for each link */
  }
  addClickListenersToAuthors();
}
