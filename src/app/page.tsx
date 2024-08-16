import React from 'react'

function page() {
  return (
    <div><figure className="md:flex bg-blue-200 rounded-xl p-8 md:p-0 dark:bg-black-700">
    <img className="w-21 h-21 object:cover object:center md:  md:rounded-none rounded-full mx-auto" src="/1.jpg" alt="" width="300" height="100"/>
    <div className="pt-6 md:p-5 text-center md:text-left space-y-4">
      <blockquote>
        <p className=" font-medium text-blue-900 dark:text-blue-1000">
          
        I am currently pursuing a Bachelor's degree at Khwaja Fareed University of Engineering and Information Technology. In addition to my studies, I am actively engaged in a Generative AI course and am also enrolled in a Web Development course to further enhance my skills in these areas.
        </p>
      </blockquote>
      <figcaption className="font-medium text-lg">
        <div className="text-black-800 dark:text-black-400">
        Isha Ishtiaq
        </div>
        <div className="text-blue-700 dark:text-blue-900">
       BSCS,KFUEIT
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page