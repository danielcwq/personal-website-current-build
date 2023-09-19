import React from "react";
import Navigation from "./Navigation";
import content from "../content";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    Figma
  </div>,
  <div className="item" data-value="2">
    ReactJS
  </div>,
  <div className="item" data-value="3">
    Fast.ai
  </div>,
  <div className="item" data-value="4">
    Tailwind.css
  </div>,
  <div className="item" data-value="5">
    PyTorch
  </div>,
  <div className="item" data-value="6">
    Python
  </div>,
  <div className="item" data-value="7">
    JavaScript
  </div>,
  <div className="item" data-value="8">
    Technial Writing
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    autoPlayStrategy="default"
    autoPlayInterval={0}
    animationDuration={4000}
    animationEasingFunction="linear"
    animationType="slide"
    infinite
    touchTracking={true}
    disableDotsControls
    disableButtonsControls
    items={items}
    responsive={responsive}
  />
);

function Portfolio() {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center">
        <h1 className="text-3xl pt-24 mt-2 font-bold pl-10 text-justify font-dosis">
          {" "}
          Tools{" "}
        </h1>
      </div>
      <div className="px-6 md:px-12">
        <div className="mx-4 text-2xl md:mx-16 md:my-4 font-dosis">
          <Carousel />
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.kaggle.com/danielcwq"
          className="m-8 p-6 flex justify-center text-center font-dosis md:rounded-xl bg-gray-300 hover:bg-gray-500 text-2xl"
        >
          Kaggle Profile
        </a>
        <a
          href="https://huggingface.co/danielcwq"
          className="m-8 p-6 flex justify-center text-center font-dosis md:rounded-xl bg-gray-300 hover:bg-gray-500 text-2xl"
        >
          HuggingFace Profile
        </a>
      </div>

      <div className="flex justify-center">
        <h1 className="text-3xl pt-10 md:pt-16 font-bold pl-10 text-justify font-dosis">
          {" "}
          Projects{" "}
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 md:flex-row justify-between font-dosis mx-2 md:mx-4"
        style={{ minHeight: "50vh" }}
      >
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-green-700 ">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <div className="flex justify-center">
              <iframe
                class="md:rounded-lg"
                src="https://www.loom.com/embed/c479c346de624fb98220169aa8848661?sid=a2a1868b-690b-4e24-a695-0bf8a30a0ee0"
              />
            </div>

            <div className="text-2xl font-semibold my-5 text-center ">
              DataScienceSingapore (DSSG) Langchain Sharing
              <br />
            </div>

            <div className="text-xl text-justify my-4">
              This was a sharing where I was invited by DSSG to share about
              Managing UX / Product in Langchain applications. Find the deck and
              recorded video here!
            </div>

            <div className="flex justify-around mt-4">
              <a
                href="https://www.loom.com/share/c479c346de624fb98220169aa8848661?sid=5d596448-6da6-4704-9b4e-1bbfee207289"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Video</b>
              </a>
            </div>
            <div className="flex justify-around mt-4">
              <a
                href="https://drive.google.com/drive/folders/1p_c-bcp9ItQYrc0XDtrVP0zoJ1jskZBH?usp=sharing"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Deck</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-green-700 ">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img class="md:rounded-lg" src="./ipptruncalc.png" />
            <div className="text-2xl font-semibold my-5 text-center ">
              All-in-One 2.4km IPPT Calculator
              <br />
            </div>

            <div className="text-xl text-justify my-4">
              This is a webapp that complements my{" "}
              <a
                href="https://betterhumans.pub/how-to-get-good-at-2-4km-a-comprehensive-guide-85e9669ee19c"
                target="_blank"
                className="hover:green-700"
              >
                article
              </a>{" "}
              on training for the 2.4km run. It utilises the most updated
              formulae to calculate threshold, tempo and easy zones. Feel free
              to play around with it!
            </div>

            <div className="flex justify-around mt-4">
              <a
                href="https://ippt-run-calc.vercel.app/"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Website</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-green-700 ">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img class="ml-4 lg:ml-32" src="./emoji-running-man.gif" />
            <div className="text-2xl font-semibold my-5 text-center ">
              IPPT 2.4km Calculator + Training Plan
              <br />
              <a className="text-lg " href="https://mokyingren.sg/">
                with Mok Ying Ren
              </a>
            </div>

            <div className="text-xl text-justify my-4">
              We built a webapp that calculates training zones and split times
              during your 2.4km IPPT Run! There's also a training plan (60
              minutes per week only) that you can follow to improve your run
              time.
            </div>

            <div className="flex justify-around mt-4">
              <a
                href="https://ippttraining-danielcwq.vercel.app/"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Website</b>
              </a>
              <a
                href="https://www.loom.com/share/661feaf94ccc4a70affbf7f18948586b"
                class=" rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Website Walkthrough</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-blue-700 ">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="./chathumans.png" />
            <div className="text-2xl font-semibold my-5 text-center ">
              Chat Your Data
            </div>
            <div className="text-xl text-justify my-4">
              I built my first LLM webapp with HuggingFace Spaces and the
              LangChain library.
            </div>
            <div className="text-xl text-justify my-4">
              I used OpenAI's gpt-3.5-turbo API on a corpus of subject-specific
              notes for the A-Level syllabus in Singapore, building a Question
              and Answer bot that gives output based on the notes.
            </div>

            <div className="flex justify-around mt-4">
              <a
                href="https://huggingface.co/spaces/danielcwq/chat-your-data-trial"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Chat-Your-Economics</b>
              </a>
              <a
                href="https://huggingface.co/spaces/danielcwq/chat-your-humanities/tree/main"
                className="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Model Code</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-blue-700 ">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="./HFhead.jpeg" />
            <div className="text-2xl font-semibold my-5 text-center ">
              Running Shoe Classifier
            </div>
            <div className="text-xl text-justify my-4">
              I built my first ML webapp with HuggingFace Spaces and the fast.ai
              library in PyTorch, to categorise running shoes based on images.
            </div>
            <div className="text-xl text-justify my-4">
              As a volunteer coach, I constantly get questions as to which exact
              model of shoes to buy - this is a little tool to help budding
              runners make an informed decision!
            </div>

            <div className="flex flex-row justify-around mt-4">
              <a
                href="https://huggingface.co/spaces/danielcwq/running-shoe-classifier/"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Website</b>
              </a>
              <a
                href="https://www.kaggle.com/code/danielcwq/running-shoe-classifier/"
                className="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Model Code</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-blue-700 ">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="./chestxr.png" />
            <div className="text-2xl font-semibold my-5 text-center ">
              Multicategorical Classification of Chest Conditions
            </div>
            <div className="text-xl text-justify my-4">
              I built an end-to-end multi-categorical classifier that is able to
              recognise 15 different chest conditions and return relative
              confidence levels.
            </div>
            <div className="text-xl text-justify">
              For this project, I used the fast.ai library in PyTorch and the
              NIH Chest X-Ray Sample dataset from Kaggle, achieving an accuracy
              of 92.8% using CNNs for this computer vision task.
            </div>
            <div className="flex flex-row justify-around mt-4">
              <a
                href="https://danielching.medium.com/multi-category-classification-of-various-chest-conditions-from-chest-x-rays-1d6428522997"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Article</b> - 1600+ Views
              </a>
              <a
                href="https://colab.research.google.com/drive/182vjivfl0LgJTYaofnBiY8FebNMsSyCG"
                className="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Code</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-blue-700">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="./mnist.png" />
            <div className="text-2xl font-semibold my-5 text-center">
              Under the hood: understanding neural networks
            </div>
            <div className="text-xl text-justify my-4">
              For this project, I wrote a summary article explaining my key
              takeaways from fast.ai Chapter 4 using the MNIST dataset.
            </div>
            <div className="text-xl text-justify">
              In this binary classifier, the neural network model, built using
              PyTorch, achieved a 99.7% accuracy trying to identify the
              handwritten digits '2' and '9'.
            </div>
            <div className="flex flex-row justify-around mt-4">
              <a
                href="https://towardsdatascience.com/under-the-hood-how-do-neural-networks-really-work-7b48b171dc8c"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Article</b> - 2000+ Views
              </a>
              <a
                href="https://colab.research.google.com/drive/1t85lNzxSzhm30t2OgTyAGAeFBLV3IGND#scrollTo=9ouSHtne9n6s"
                className="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Code</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-blue-700 mt-5">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="./medicalT.png" />
            <div className="text-2xl font-semibold my-5 text-center">
              Medical Transcription Classifier
            </div>
            <div className="text-xl text-justify my-4">
              In this project, I aimed to predict various medical specialities
              given a patient's recorded transcript.
            </div>
            <div className="text-xl text-justify">
              Utilising best practices within NLP such as the ULMFiT Training
              hierarchy, this model achieved 62% accuracy with fast.ai and the
              related kaggle dataset.
            </div>
            <div className="flex flex-row justify-around mt-4">
              <a
                href="https://towardsdatascience.com/predicting-medical-specialities-from-transcripts-a-complete-walkthrough-using-ulmfit-b8a075777723"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Article</b> - 1200+ Views
              </a>
              <a
                href="https://www.kaggle.com/danielcwq/predict-medical-specialty-fastai"
                className="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Code</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-green-700 mt-5">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="./introClass.png" />
            <div className="text-2xl font-semibold my-5 text-center">
              Teaching FastAI to high-school students
            </div>
            <div className="text-xl text-justify my-4">
              Taught the FastAI x PyTorch stack to high school seniors, 5 months
              after going through the full course.
            </div>
            <div className="text-xl text-justify">
              I wanted to go past teaching just <i>another</i> technology stack.
              I explained how it was possible to make real world impact and get
              opportunities outside of high school.
            </div>
            <div className="flex flex-column md:flex-row justify-around mt-4">
              <a
                href="https://drive.google.com/drive/folders/15ly0fkBH7BY6u9ELdeBSzmKbyIhlTk0B?usp=sharing"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Slides and code</b>
              </a>
              <a
                href="https://docs.google.com/document/d/1et9LhkKc5LWPRIf2Ib4npdCuefhpYSPirEWKmFYflZs/edit"
                className="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>FastAI Resource Hub</b>
              </a>
              <a
                href="https://danielching.notion.site/Lesson-Planning-for-CSS-b37fd8ff12004801ac606526604af77b"
                className="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <p>Lesson Notes</p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-yellow-700 mt-5">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="./riseHeader.png" />
            <div className="text-2xl font-semibold my-5 text-center">
              RISE For the World Project
            </div>
            <div className="text-xl text-justify my-4">
              Participated in the inaugural RISE Challenge, creating a prototype
              of an app that connects like-minded youths to solve the world’s
              biggest problems.
            </div>
            <div className="text-xl text-justify">
              My efforts culminated in the website linked below, and was
              recognised with the inaugural RISE Finalist award.
            </div>
            <div className="flex flex-column md:flex-row justify-around mt-4">
              <a
                href="https://dancwq2.wixsite.com/rise-project"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Wesbite</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-green-700 mt-5">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="	https://rishd.weebly.com/uploads/1/2/6/2/126261661/background-images/70117589.jpeg" />
            <div className="text-2xl font-semibold my-5 text-center">
              Singapore History Day 2019
            </div>
            <div className="text-xl text-justify my-4">
              Participated in the Singapore History Day 2019 Competition,
              investigating racial relations in early modern Singapore (c.
              1819-1867).
            </div>
            <div className="text-xl text-justify my-4">
              These efforts culminated in my team being awarded the 3rd place
              nationwide. The website is linked below.
            </div>
            <div className="flex text-justify justify-around my-4">
              <a
                href="https://rishd.weebly.com/"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <b>Website</b>
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-blue-700 mt-5">
          <div className="m-8 p-6 md:rounded-xl text-white font-dosis">
            <img src="" />
            <div className="text-2xl font-semibold my-5 text-center">
              Smaller side projects
            </div>
            <div className="flex text-justify justify-around my-4">
              <a
                href="https://colab.research.google.com/drive/1JdmWP4HIRUwSAw6lhBuqV78Ua2El7Ll6?usp=sharing"
                class="rounded-lg bg-white text-black p-2"
                target="_blank"
              >
                <p>Identifying bird species</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
