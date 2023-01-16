/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="About | MarbleExpert"
        description="  Welcome to our website about marble! We are a team of design
  professionals and marble enthusiasts"
      />
    }
  >
    <Content>
      <div className="flex justify-center">
        <div className="prose prose-stale">
          <h2 className="text-center mt-10">About | MarbleExpert</h2>
          <p>
            Welcome to our website about marble! We are a team of design
            professionals and marble enthusiasts who are dedicated to bringing
            you the latest information and inspiration about this timeless and
            versatile material.
          </p>

          <p>
            Our website is a comprehensive resource for all things related to
            marble, from its history and uses to its care and maintenance.
            Whether you are a homeowner looking to incorporate marble into your
            home design, an architect or designer seeking inspiration, or simply
            someone who appreciates the beauty of marble, we hope you will find
            something of interest here.
          </p>
          <p>
            At our website, we are committed to bringing you the most accurate
            and up-to-date information about marble. We spend countless hours
            researching and gathering information from a variety of sources,
            including industry experts and industry publications, to ensure that
            the content on our site is reliable and informative.
          </p>

          <p>
            We understand that choosing the right marble for your home design
            project is an important decision, and we want to make sure that you
            have all of the information you need to make an informed choice.
            Whether you are looking for information about the different types of
            marble available, tips on how to care for your marble surfaces, or
            inspiration for your next home design project, we are here to help.
          </p>

          <p>
            In addition to providing valuable information about marble, our
            website also offers a curated collection of beautiful marble pieces
            to inspire your home design projects. From countertops and vanities
            to fireplace surrounds and accent walls, you'll find a wide range of
            marble options to choose from. Thank you for visiting our site. If
            you have any questions or would like more information, don't
            hesitate to contact us at <b>db191996@gmail.com</b>. We hope that
            you will join us in our love of marble and all that it has to
            offer."
          </p>
        </div>
      </div>
    </Content>
  </Main>
);

export default About;
