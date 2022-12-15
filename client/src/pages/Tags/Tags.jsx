import React from 'react';

import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import TagsList from './TagsList';


import './Tags.css';

const Tags = () => {

  const tagsList = [{
    id: 1,
    tagName: "javascript",
    tagDesc: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."
  },{
    id: 2,
    tagName: "python",
    tagDesc: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name 'Python' is a nod to the British comedy group Monty Python"
  },{
    id: 3,
    tagName: "c#",
    tagDesc: "C# is often used to develop professional, dynamic websites on the . NET platform, or open-source software. So, even if you're not a fan of the Microsoft architecture, you can still use C# to create a fully-functional website"
  },{
    id: 4,
    tagName: "java",
    tagDesc: "Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages."
  },{
    id: 5,
    tagName: "php",
    tagDesc: "PHP is an acronym for 'PHP: Hypertext Preprocessor' PHP is a widely-used, open source scripting language. PHP scripts are executed on the server. PHP is free to download and use."
  },{
    id: 6,
    tagName: "html",
    tagDesc: "Hyper Text Mark-up Language (a system used to mark text for World Wide Web pages in order to obtain colours, style, pictures, etc.)"
  },{
    id: 7,
    tagName: "android",
    tagDesc: "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."
  },{
    id: 8,
    tagName: "css",
    tagDesc: "CSS is the acronym of 'Cascading Style Sheets'. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these 'cascading style sheets' which are equally called CSS files"
  },{
    id: 9,
    tagName: "Reactjs",
    tagDesc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development"
  },{
    id: 10,
    tagName: "node.js",
    tagDesc: "Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications."
  }]
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">A tag is keyword or label that categorizes your question with other, similar questions.</p>
        <p className="tags-p">Using the right tags makes it easier for others to find and answer your question.</p>
        <div className="tags-list-container">
          {
            tagsList.map((tag) => (
              <TagsList key={tag.id} tag={tag} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Tags