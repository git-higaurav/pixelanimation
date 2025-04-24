"use client"

import About from "./_pages/about/page"
import Contact from "./_pages/contact/page"
import Courses from "./_pages/courses/page"
import Features from "./_pages/features/page"
import FloatingButtons from "./_pages/floating-buttons/page"
import Footer from "./_pages/footer/page"
import Header from "./_pages/header/page"
import Landing from "./_pages/landing/page"
import Mentors from "./_pages/mentors/page"
import Newsletter from "./_pages/newsletter/page"
import PlacementPage from "./_pages/placement/page"
import SuccessStories from "./_pages/success-stories/page"

export default function Home() {
    return (
        <>
          <Header/>
          <Landing/>
          <Features/>
          <About/>
          <PlacementPage/>  
          <Courses/>
          <Mentors/>
          {/* <SuccessStories/> */}
          <Newsletter/>
          <Contact/>
          <FloatingButtons/>
          <Footer/>
        </>
    )
}