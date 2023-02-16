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
    optArticleTagsSelector = '.post-tags .list';

  // eslint-disable-next-line no-inner-declarations
  function generateTitleLinks() {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log('Title list: ',titleList);

    titleList.innerHTML = '';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);

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

  /* Third task */

  // eslint-disable-next-line no-inner-declarations
  function generateTags(){

    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */

    for (const article of articles) {

      /* find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log('tagswrapper', tagsWrapper);

      /* make html variable with empty string */

      let html = '';

      /* get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');
      console.log('articleTags',articleTags);

      /* split tags into array */

      const articleTagsArray = articleTags.split(' ');
      console.log('articleTagsArray:', articleTagsArray);

      /* START LOOP: for each tag */

      for (let tag of articleTagsArray) {
        console.log(tag);

        /* generate HTML of the link */

        const linkHTML = `<li><a href="#tag-${tag}"><span>${tag}, </span></a></li>`;
        console.log('html',linkHTML);

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

}
