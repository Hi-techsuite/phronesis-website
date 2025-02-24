import React from "react";
import { GridManager, ImageGridModel } from "./ServiceHelperComponents";

const ServiceComponent = ({ payload }) => {
  const relatedServices = services_data.filter(
    (service) => service.belongsTo === payload.name
  );

  return (
    <div>
      {relatedServices.map((service) => (
        <li key={service.url}>{service.name}</li>
      ))}
    </div>
  );
};

const services_data = [
  {
    name: "Inspection Services",
    type: "main-list",
    url: "/inspection-services",

    img: "",
    body: (
      <div className="">
        <div className="flex md:flex-row flex-col md:gap-10 gap-5 justify-around">
          <div className="ServicePage2_area_cont flex-1">
            ScafTech Engineering Services provides specialized inspection
            services for tanks and vessels across various industrial sectors in
            Nigeria. Our IRATA-certified Rope Access technicians possess
            extensive experience and qualifications to carry out the following
            inspections:
          </div>

          <div className="ServicePage2_area_cont flex-2">
            <p className="text-lg ">Inspection Services;</p>
            <ol className="list-disc list-inside text-sm font-bold">
              <ServiceComponent payload={{ name: "Inspection Services" }} />
            </ol>
          </div>
        </div>

        <div className="ServicePage2_area_cont">
          <p>
            Regular inspections and testing are crucial to maintaining the
            safety and structural integrity of key industrial assets. By
            utilizing advanced rope access techniques, we minimize downtime and
            offer a cost-effective alternative to traditional access methods.
          </p>

          <p>
            For professional and efficient inspection services, trust ScafTech
            Engineering Services to enhance the longevity and reliability of
            your tanks and vessels. Contact us today to learn more.
          </p>
        </div>

        <GridManager constraint="Inspection Services" />
      </div>
    ),
  },

  {
    name: "Asset Integrity Maintenance( AIM)",
    type: "main-list",
    url: "/asset-integrity-maintenance",
  },
  {
    name: "Pipeline & Process Service",
    type: "main-list",
    url: "/pipeline-process-service",
  },
  {
    name: "Lifting Equipment Inspection",
    type: "sub-list",
    url: "/lifting-equipment-inspection",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className=" ">
          <div className="ServicePage2_area_cont flex-1">
            Scaftech carries out lifting equipment inspection in accordance with
            industry standards and applicable legislations. Scaftech also carry
            out lifting equipment inspection certification training.
          </div>
          <div className="ServicePage2_area_cont flex-1">
            To supplement a thorough examination of any item of lifting
            equipment, we provide the most comprehensive NDT methods available
            as may be required. Our Inspection teams are multi-skilled and are
            certified SNT Level II according to SNT-TC-1A in different NDT
            methods such as MT, PT, VT, UT, RT, and ET. As a full member of
            LEEA, we follow strict codes of practice recommended by the
            association and in accordance with international standards and
            regional statutory requirements. We never compromise our Lifting
            Equipment Inspection Quality Standard.
          </div>

          <GridManager constraint="Inspection Services" />
        </div>
      </div>
    ),
  },
  {
    name: "NDT",
    type: "sub-list",
    belongsTo: "Inspection Services",

    url: "/ndt",
    body: (
      <div>
        <div className=" ">
          <div className="ServicePage2_area_cont flex-1">
            Scaftech provides a wide range of Non-Destructive Testing (NDT)
            services to ensure the safety and reliability of your assets. Our
            team of experienced technicians utilizes advanced NDT methods to
            detect and analyze defects in materials and equipment without
            causing damage. Our NDT services include:
          </div>
          <div className="ServicePage2_area_cont flex-1">
            <ul className="list-disc list-inside text-sm font-bold">
              <li>Ultrasonic Testing (UT)</li>
              <li>Magnetic Particle Testing (MT)</li>
              <li>Penetrant Testing (PT)</li>
              <li>Visual Testing (VT)</li>
              <li>Phased Array Ultrasonic Testing (PAUT)</li>
              <li>Time of Flight Diffraction (TOFD)</li>
              <li>Guided Wave Ultrasonic Testing (GWUT)</li>
              <li>Eddy Current Testing (ET)</li>
              <li>Positive Material Identification (PMI)</li>
              <li>Hardness Testing</li>
            </ul>
          </div>
          {/* <GridManager constraint="NDT" /> */}
        </div>
      </div>
    ),
  },
  {
    name: "Instrument Calibration",
    type: "sub-list",
    url: "/instrument-calibration",
    belongsTo: "Inspection Services",

    body: (
      <div>
        <div className=" ">
          <div className="ServicePage2_area_cont flex-1">
            Scaftech Engineering Services provides comprehensive instrument
            calibration services to ensure the accuracy and reliability of your
            measurement instruments. Our team of trained technicians is
            proficient in calibrating a wide range of instruments, including:
          </div>
          <div className="ServicePage2_area_cont flex-1">
            <ul className="list-disc list-inside text-sm font-bold">
              <li>Pressure Gauges</li>
              <li>Temperature Gauges</li>
              <li>Flow Meters</li>
              <li>Level Gauges</li>
              <li>Control Valves</li>
              <li>Transmitters</li>
              <li>Pressure Switches</li>
              <li>Temperature Switches</li>
              <li>Pressure Relief Valves</li>
              <li>Temperature Relief Valves</li>
            </ul>
          </div>
          {/* <GridManager constraint="Instrument Calibration" /> */}
        </div>
      </div>
    ),
  },
  {
    name: "OCTG Inspection",
    type: "sub-list",
    url: "/octg-inspection",
    belongsTo: "Inspection Services",
  },
  {
    name: "QAQC",
    type: "sub-list",
    url: "/qaqc",
    belongsTo: "Inspection Services",

    body: (
      <div>
        <div className="ServicePage2_area_cont flex-1">
          At ScafTech Engineering Services, we deliver comprehensive QA/QC
          inspections to ensure your project meets the highest quality and
          safety standards across various industries, including oil & gas,
          marine, and construction.
        </div>
        <div className="ServicePage2_area_cont flex-1">
          <h1> Other Services Include</h1>
          <ul className="list-disc list-inside text-sm font-bold">
            <li>Visual & Non-Destructive Testing</li>
            <li>Welding & Coating Inspections </li>
            <li>Proactive Quality Assurance</li>
          </ul>
        </div>
        <div className="ServicePage2_area_cont flex-1">
          <h1> Why Choose Scaftech</h1>
          <ul className="list-disc list-inside text-sm font-bold">
            <li>Certified & Experienced Inspectors</li>
            <li>Tailored Inspection Programs </li>
            <li>On-Site & Third-Party Inspections</li>
            <li>Accurate Data Analysis with Advanced Tools</li>
          </ul>
        </div>

        <p>
          We provide reliable, unbiased, and efficient QA/QC solutions, giving
          you peace of mind that your project complies with all industry
          regulations.
        </p>
      </div>
    ),
  },
  {
    name: "3rd Party Inspection",
    type: "sub-list",
    url: "/third-party-inspection",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className="ServicePage2_area_cont flex-1">
          At ScafTech Engineering Services, we provide independent third-party
          inspections across industries such as oil & gas, marine, construction,
          manufacturing, and agriculture to ensure compliance with industry
          standards.
        </div>

        <div>
          <h1> What we Offer </h1>

          <ul className="list-disc list-inside text-sm font-bold">
            <li>
              <h3>Defect & Non-Conformity Detection:</h3>
              Identifying deviations and recommending corrective actions.
            </li>

            <li>
              <h3>Regulatory Compliance Assurance</h3>

              <p>
                Ensuring your products, facilities, and equipment meet quality
                and safety standards.
              </p>
            </li>

            <li>
              <h3> Advanced Inspection Techniques</h3>
              <p>Utilizing cutting-edge technology for accurate assessments</p>
            </li>
          </ul>

          <div className="">
            With our expert inspectors and modern inspection practices, we help
            you mitigate risks, improve efficiency, and maintain high-quality
            standards in your operations. Partner with ScafTech today for
            reliable third-party inspection solutions.
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Marine Warranty Survey",
    type: "sub-list",
    belongsTo: "Inspection Services",
    url: "/marine-warranty-survey",
    body: (
      <div>
        <div className="ServicePage2_area_cont flex-1">
          At ScafTech Engineering Services, we provide Marine Warranty Survey
          (MWS) services to ensure safe, efficient, and compliant marine
          operations. Our expert surveyors assess risks, monitor activities, and
          verify compliance with industry standards.
        </div>

        <div>
          <h1> Our MWS Services Include;</h1>

          <ul className="list-disc list-inside text-sm font-bold">
            <li>
              <h3> Pre-Project Surveys:</h3>
              <p>
                Assessing vessel suitability, risk factors, and regulatory
                compliance.
              </p>
            </li>

            <li>
              <h3>On-Site Monitoring </h3>

              <p>Ensuring safe vessel and equipment usage during operations.</p>
            </li>

            <li>
              <h3> Loadout & Transportation Surveys</h3>
              <p>Verifying cargo safety for offshore structures</p>
            </li>
            <li>
              <h3> Offshore Installation Surveys </h3>
              <p> Inspecting vessels and equipment for subsea installations.</p>
            </li>
          </ul>

          <div className="">
            With a proven track record in the oil & gas and marine industries,
            ScafTech guarantees high-quality, reliable, and industry-compliant
            MWS solutions tailored to your needs.
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Risk Based Inspection",
    type: "sub-list",
    belongsTo: "Inspection Services",
    url: "/risk-based-inspection",
    body: (
      <div>
        <div className="ServicePage2_area_cont flex-1">
          At ScafTech Engineering Services, our Risk-Based Inspection (RBI)
          service ensures proactive asset protection and operational efficiency.
          We provide a strategic approach that integrates detailed risk
          assessments, customized inspection plans, and data-driven insights to
          enhance asset reliability and performance.
        </div>
        <div className="ServicePage2_area_cont flex-1">
          Using advanced inspection techniques and cutting-edge technology, we
          deliver precise evaluations of asset conditions, empowering
          organizations to make informed decisions on maintenance and asset
          management ultimately optimizing costs and extending equipment
          lifespan.
        </div>

        <div className="ServicePage2_area_cont flex-1">
          <h1>Enhance your asset integrity with ScafTech. </h1>
          <p>
            Contact us today to learn how our RBI services can transform your
            risk management strategy.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Loler Inspection",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/loler-inspection",
    body: (
      <div>
        <div>
          <h2>Loler Inspection</h2>
          <p>
            LOLER (Lifting Operations and Lifting Equipment Regulations)
            inspections apply to a wide range of lifting appliances and
            accessories, including:
          </p>

          <ul>
            <li>Cranes of all types</li>
            <li>Forklift trucks</li>
            <li>LChain hoists</li>
            <li>Mobile elevating work platforms</li>
            <li>Goods lifts</li>
            <li>Shackles, eye bolts, slings, and other lifting accessories</li>
          </ul>
        </div>

        <div className="ServicePage2_area_cont flex-1">
          As per LOLER Regulation 9, a Thorough Examination of all lifting
          equipment must be conducted by a competent person to ensure
          compliance. Lifting equipment, as defined by LOLER, includes any
          machinery or device used at work for lifting or lowering loads, along
          with attachments used for anchoring, fixing, or supporting it.
        </div>

        <div>
          <h2>Our Expertise</h2>
          <p>
            Our team of LEEA-qualified and FGN Factory Act-approved inspection
            engineers will:
          </p>

          <ul>
            <li>Inspect and manage your LOLER Inspection Scheme </li>
            <li>Develop a comprehensive lifting gear register</li>
            <li>
              Provide detailed inspection reports in both hard and soft copies
              for your convenience{" "}
            </li>
          </ul>
        </div>

        <div>
          <h2>Comprehensive Inspection and Testing Services</h2>
          <p>
            We offer a full range of inspection and testing services to ensure
            the safety, reliability, and compliance of your equipment:
          </p>

          <ul>
            <li>Lifting Equipment Inspection</li>
            <li>Cargo Carrying Units Inspection</li>
            <li>Proof Load Testing</li>
            <li>LOLER Inspection</li>
            <li>Wire Rope Management</li>
            <li>Heavy Lift Testing</li>
            <li>Crane Inspection</li>
          </ul>
        </div>
        <div className="ServicePage2_area_cont flex-1">
          <p>
            With our qualified engineers and commitment to excellence, we ensure
            your equipment meets the highest safety and regulatory standards.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Wire Rope Inspection ",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/wire-rope-inspection",
    body: (
      <div>
        <div>
          <h2>Wire Rope Inspection </h2>
          <p>
            Numerous studies on the reliability of Non-Destructive Testing (NDT)
            for wire ropes have demonstrated the confidence and accuracy of the
            results achieved through this method. However, since there are no
            formal NDT rejection criteria, all rejection standards are based on
            widely accepted visual inspection guidelines.
          </p>

          <ul>
            <li>Cranes of all types</li>
            <li>Forklift trucks</li>
            <li>LChain hoists</li>
            <li>Mobile elevating work platforms</li>
            <li>Goods lifts</li>
            <li>Shackles, eye bolts, slings, and other lifting accessories</li>
          </ul>
        </div>

        <div className="ServicePage2_area_cont flex-1">
          At ScafTech, we provide the best-in-class wire rope inspection and
          management services, combining NDT and visual inspection techniques to
          ensure the highest levels of safety and reliability.
        </div>

        <div>
          <h2>Our Services Deliver;</h2>

          <ul>
            <li>
              <h3>Enhanced Safety Performance</h3>
              <p>
                Ensuring greater reliability and safety in wire rope operations.
                Cost-Effectiveness: Prolonging the lifespan of wire ropes
                through accurate and timely inspections.{" "}
              </p>{" "}
            </li>
            <li>
              <h3>Detailed Reporting</h3>
              <p>
                Providing comprehensive inspection reports that include: The
                condition of the inspected rope Rope type and specifications
                Calibration results and settings.
              </p>
              <p>
                Our reports are immediate, specific, and aligned with current
                wire rope inspection standards for visual assessment.{" "}
              </p>
            </li>
            <li>
              <h3>Advanced Technology for Superior Inspections </h3>

              <p>
                With significant investment in our wire rope inspection
                technology, we are equipped to detect not only external flaws
                but also critical internal flaws that are often invisible to the
                naked eye. This qualitative approach ensures a thorough
                evaluation of your wire ropes, enhancing safety and performance.
              </p>
            </li>
          </ul>
        </div>

        <div className="ServicePage2_area_cont flex-1">
          <p>
            Trust ScafTech for reliable, accurate, and industry-leading wire
            rope inspection services.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Wire Rope Management  ",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/wire-rope-management",
    body: (
      <div>
        <div className="ServicePage2_area_cont flex-1">
          While there are no formal NDT rejection criteria for wire ropes,
          ScafTech adheres to the widely accepted visual inspection standards to
          ensure the highest level of safety and reliability. We offer the best
          wire rope inspection and management services, combining advanced
          Non-Destructive Testing (NDT) and visual inspection techniques.
        </div>

        <div>
          <h2>Our Services Deliver;</h2>

          <ul>
            <li>
              <h3>Enhanced Safety and Reliability: </h3>
              <p>Ensuring optimal performance and safety of wire ropes.</p>{" "}
            </li>
            <li>
              <h3>Cost-Effectiveness:</h3>
              <p>
                Maximizing the lifespan of your equipment through precise and
                timely inspections.
              </p>
            </li>

            <li>
              <h3>Detailed Reporting: </h3>

              <p>Providing comprehensive inspection reports that include:</p>

              <ul>
                <li> Condition of the inspected rope</li>
                <li>Rope type, settings, and specifications </li>
                <li> Calibration results</li>
              </ul>

              <p>
                Our reports are immediate, specific, and aligned with current
                wire rope inspection standards.
              </p>
            </li>
            <li>
              <h3>Advanced Inspection Technology :</h3>
              <p>
                With significant investment in cutting-edge technology,
                ScafTech’s wire rope inspection services go beyond surface-level
                assessments. We detect both external and internal flaws,
                ensuring a thorough evaluation of your wire ropes for enhanced
                safety and performance.
              </p>
            </li>
            <li>
              <h3>Standards for Visual Inspection :</h3>
              <p>
                Our inspections are conducted in accordance with
                industry-leading visual inspection standards, ensuring
                compliance and reliability.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3>NDT Services </h3>

          <p>
            In addition to wire rope management, we offer a full range of
            Non-Destructive Testing services, including:
          </p>

          <ul>
            <li> Magnetic Particle Inspection </li>
            <li>Dye Penetrant Testing </li>
            <li> Ultrasonic Testing </li>
            <li> Eddy Current Testing </li>
            <li> Hull Gauging </li>
          </ul>

          <p>
            Trust ScafTech for comprehensive, accurate, and reliable inspection
            and management services tailored to your needs.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Heavy Lift Testing",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/heavy-lift-testing",
    body: (
      <div>
        <div>
          <h2>Heavy Lift Testing </h2>
          <p>
            Testing high-tonnage lifting equipment presents unique challenges,
            particularly when sourcing high-capacity test weights. ScafTechl, we
            pride ourselves on being industry leaders in lifting equipment
            inspection services. Our consistent and innovative approach ensures
            that our customers meet the stringent requirements of the industry
            with ease and confidence.
          </p>

          <p>
            When it comes to heavy lift testing, we never compromise on quality
            or safety
          </p>
          <ul>
            <li>Cranes of all types</li>
            <li>Forklift trucks</li>
            <li>LChain hoists</li>
            <li>Mobile elevating work platforms</li>
            <li>Goods lifts</li>
            <li>Shackles, eye bolts, slings, and other lifting accessories</li>
          </ul>
        </div>

        <div>
          <h2>Our Expertise</h2>
          <p>Trust us for all your heavy lift testing needs, including:</p>
          <ul>
            <li>Tri-plates</li>
            <li>High-capacity cranes</li>
            <li>Spreader beams</li>
          </ul>
        </div>

        <div>
          <h2>Our team of experts utilizes advanced solutions, including: </h2>

          <ul>
            <li>High-capacity load cells </li>
            <li>Water bags </li>
            <li>In-house engineered dead weights</li>
          </ul>
        </div>
        <div className="ServicePage2_area_cont flex-1">
          <p>
            With our state-of-the-art equipment and dedicated professionals, we
            deliver reliable, accurate, and compliant testing services tailored
            to your requirements.
          </p>
        </div>

        <div>
          Call us today to discuss your heavy lift testing needs and experience
          the excellence only ScafTech delivers.
        </div>
      </div>
    ),
  },

  {
    name: "Loler Inspection",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/loler-inspection",
    body: (
      <div>
        <div>
          <h2>Loler Inspection</h2>
          <p>
            LOLER (Lifting Operations and Lifting Equipment Regulations)
            inspections apply to a wide range of lifting appliances and
            accessories, including:
          </p>

          <ul>
            <li>Cranes of all types</li>
            <li>Forklift trucks</li>
            <li>LChain hoists</li>
            <li>Mobile elevating work platforms</li>
            <li>Goods lifts</li>
            <li>Shackles, eye bolts, slings, and other lifting accessories</li>
          </ul>
        </div>

        <div className="ServicePage2_area_cont flex-1">
          As per LOLER Regulation 9, a Thorough Examination of all lifting
          equipment must be conducted by a competent person to ensure
          compliance. Lifting equipment, as defined by LOLER, includes any
          machinery or device used at work for lifting or lowering loads, along
          with attachments used for anchoring, fixing, or supporting it.
        </div>

        <div>
          <h2>Our Expertise</h2>
          <p>
            Our team of LEEA-qualified and FGN Factory Act-approved inspection
            engineers will:
          </p>

          <ul>
            <li>Inspect and manage your LOLER Inspection Scheme </li>
            <li>Develop a comprehensive lifting gear register</li>
            <li>
              Provide detailed inspection reports in both hard and soft copies
              for your convenience{" "}
            </li>
          </ul>
        </div>

        <div>
          <h2>Comprehensive Inspection and Testing Services</h2>
          <p>
            We offer a full range of inspection and testing services to ensure
            the safety, reliability, and compliance of your equipment:
          </p>

          <ul>
            <li>Lifting Equipment Inspection</li>
            <li>Cargo Carrying Units Inspection</li>
            <li>Proof Load Testing</li>
            <li>LOLER Inspection</li>
            <li>Wire Rope Management</li>
            <li>Heavy Lift Testing</li>
            <li>Crane Inspection</li>
          </ul>
        </div>
        <div className="ServicePage2_area_cont flex-1">
          <p>
            With our qualified engineers and commitment to excellence, we ensure
            your equipment meets the highest safety and regulatory standards.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Loler Inspection",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/loler-inspection",
    body: (
      <div>
        <div>
          <h2>Loler Inspection</h2>
          <p>
            LOLER (Lifting Operations and Lifting Equipment Regulations)
            inspections apply to a wide range of lifting appliances and
            accessories, including:
          </p>

          <ul>
            <li>Cranes of all types</li>
            <li>Forklift trucks</li>
            <li>LChain hoists</li>
            <li>Mobile elevating work platforms</li>
            <li>Goods lifts</li>
            <li>Shackles, eye bolts, slings, and other lifting accessories</li>
          </ul>
        </div>

        <div className="ServicePage2_area_cont flex-1">
          As per LOLER Regulation 9, a Thorough Examination of all lifting
          equipment must be conducted by a competent person to ensure
          compliance. Lifting equipment, as defined by LOLER, includes any
          machinery or device used at work for lifting or lowering loads, along
          with attachments used for anchoring, fixing, or supporting it.
        </div>

        <div>
          <h2>Our Expertise</h2>
          <p>
            Our team of LEEA-qualified and FGN Factory Act-approved inspection
            engineers will:
          </p>

          <ul>
            <li>Inspect and manage your LOLER Inspection Scheme </li>
            <li>Develop a comprehensive lifting gear register</li>
            <li>
              Provide detailed inspection reports in both hard and soft copies
              for your convenience{" "}
            </li>
          </ul>
        </div>

        <div>
          <h2>Comprehensive Inspection and Testing Services</h2>
          <p>
            We offer a full range of inspection and testing services to ensure
            the safety, reliability, and compliance of your equipment:
          </p>

          <ul>
            <li>Lifting Equipment Inspection</li>
            <li>Cargo Carrying Units Inspection</li>
            <li>Proof Load Testing</li>
            <li>LOLER Inspection</li>
            <li>Wire Rope Management</li>
            <li>Heavy Lift Testing</li>
            <li>Crane Inspection</li>
          </ul>
        </div>
        <div className="ServicePage2_area_cont flex-1">
          <p>
            With our qualified engineers and commitment to excellence, we ensure
            your equipment meets the highest safety and regulatory standards.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Loler Inspection",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/loler-inspection",
    body: (
      <div>
        <div>
          <h2>Loler Inspection</h2>
          <p>
            LOLER (Lifting Operations and Lifting Equipment Regulations)
            inspections apply to a wide range of lifting appliances and
            accessories, including:
          </p>

          <ul>
            <li>Cranes of all types</li>
            <li>Forklift trucks</li>
            <li>LChain hoists</li>
            <li>Mobile elevating work platforms</li>
            <li>Goods lifts</li>
            <li>Shackles, eye bolts, slings, and other lifting accessories</li>
          </ul>
        </div>

        <div className="ServicePage2_area_cont flex-1">
          As per LOLER Regulation 9, a Thorough Examination of all lifting
          equipment must be conducted by a competent person to ensure
          compliance. Lifting equipment, as defined by LOLER, includes any
          machinery or device used at work for lifting or lowering loads, along
          with attachments used for anchoring, fixing, or supporting it.
        </div>

        <div>
          <h2>Our Expertise</h2>
          <p>
            Our team of LEEA-qualified and FGN Factory Act-approved inspection
            engineers will:
          </p>

          <ul>
            <li>Inspect and manage your LOLER Inspection Scheme </li>
            <li>Develop a comprehensive lifting gear register</li>
            <li>
              Provide detailed inspection reports in both hard and soft copies
              for your convenience{" "}
            </li>
          </ul>
        </div>

        <div>
          <h2>Comprehensive Inspection and Testing Services</h2>
          <p>
            We offer a full range of inspection and testing services to ensure
            the safety, reliability, and compliance of your equipment:
          </p>

          <ul>
            <li>Lifting Equipment Inspection</li>
            <li>Cargo Carrying Units Inspection</li>
            <li>Proof Load Testing</li>
            <li>LOLER Inspection</li>
            <li>Wire Rope Management</li>
            <li>Heavy Lift Testing</li>
            <li>Crane Inspection</li>
          </ul>
        </div>
        <div className="ServicePage2_area_cont flex-1">
          <p>
            With our qualified engineers and commitment to excellence, we ensure
            your equipment meets the highest safety and regulatory standards.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Cargo Carrying Unit",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/cargo-carrying-unit-and-inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase">
                {" "}
                Cargo Carrying Unit Inspection
              </h3>

              <p>
                Ensuring the safe packing and handling of cargo to and from
                offshore locations is critical. Best practices dictate that all
                Cargo Carrying Units (CCUs) and lifting equipment used for
                transporting materials must be carefully selected based on their
                type, size, and load capacity to meet operational requirements.
                Additionally, it is essential to verify that a robust testing
                and inspection program is in place to maintain safety and
                compliance standards.
              </p>
            </div>
            <div className="py-10 ">
              <h3 className="font-bold text-lg">Cargo Inspection Services</h3>
              Our comprehensive inspection services for Cargo Carrying Units
              include, but are not limited to:
            </div>

            <ul className="list-disc list-inside text-sm font-bold">
              <li>Offshore containers of all types</li>
              <li>Chemical transit tanks </li>
              <li>Aviation fuel tanks </li>
              <li>Compactor units </li>
              <li>Compactor bags (bagging compactors) </li>
              <li>Gas cylinder racks and carriers </li>
              <li>Offshore baskets, tool carriers, and skips of all types </li>
            </ul>
          </div>

          <div>
            <h3>LIFTING EQUIPMENT INSPECTION</h3>

            <ul className="list-disc list-inside text-sm font-bold">
              <li>Cargo Carrying Units Inspection</li>
              <li>Offshore Containers Inspection</li>
              <li>Proof Load Testing</li>
              <li>LOLER Inspection</li>
              <li>Wire Rope Management</li>
              <li>Heavy Lift Testing</li>
              <li>Crane Inspection</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Offshore Containers Inspection",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/offshore-containers-inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase">
                {" "}
                ScafTech Engineering Services Inspectors
              </h3>

              <p>
                Our inspectors possess extensive competency and certifications
                across a wide range of standards, materials, and procedures. We
                adhere to stringent requirements, ensuring that all existing
                offshore containers designed to meet industry standards undergo
                thorough inspections. This includes the use of Non-Destructive
                Testing (NDT) to ensure full compliance with certification
                requirements.
              </p>
            </div>
            <div className="py-10 ">
              <h3 className="font-bold text-lg">
                Comprehensive Offshore Container Inspection Services{" "}
              </h3>
              ScafTech provides a complete range of inspection services for
              offshore containers. Our process includes:
            </div>

            <ul className="list-disc list-inside text-sm font-bold">
              <li>Detailed visual examinations </li>
              <li>Comprehensive Non-Destructive Testing (NDT) </li>
              <li>Proof load testing </li>
            </ul>

            <div className="py-10 ">
              <h3 className="font-bold text-lg">Reporting and Accessibility</h3>

              <p>
                Upon completion of the inspection, a detailed report is
                generated and made available to clients in both hard and
                electronic formats. For added convenience, electronic copies are
                accessible through our secure web portal, where clients can log
                in using a unique password for easy access to their
                documentation.
              </p>
            </div>
          </div>

          <div>
            <h3>LIFTING EQUIPMENT INSPECTION</h3>

            <ul className="list-disc list-inside text-sm font-bold">
              <li>Cargo Carrying Units Inspection</li>
              <li>Offshore Containers Inspection</li>
              <li>Proof Load Testing</li>
              <li>LOLER Inspection</li>
              <li>Wire Rope Management</li>
              <li>Heavy Lift Testing</li>
              <li>Crane Inspection</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Proof Load Testing",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/proof-load-testing",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase"> Proof Load Testing</h3>

              <p>
                Proof load testing involves the deliberate overloading of
                lifting equipment to verify its ability to perform safely under
                its designated working load. This rigorous testing ensures
                compliance with industry standards, manufacturer specifications,
                and safety requirements by subjecting the equipment to its
                full-strength capacity.
              </p>
            </div>
            <div className="py-10 ">
              <h3 className="font-bold text-lg">
                Comprehensive Offshore Container Inspection Services{" "}
              </h3>
              Proof load testing is mandatory in several scenarios, including:
            </div>

            <ul className=" ist-inside list-['-_'] text-sm font-bold">
              <li>
                Initial installation of lifting equipment before it is put into
                service{" "}
              </li>
              <li>Following weld repairs to structural components </li>
              <li>After a complete overhaul of the equipment </li>
              <li>
                At specific intervals as defined by applicable standards and
                regulations
              </li>
            </ul>

            <div className="py-10 ">
              <h3 className="font-bold text-lg">ScafTech Test Hub </h3>

              <p>
                The ScafTech Test Hub is a state-of-the-art, full-scale testing
                facility equipped with a wide range of fixed and mobile testing
                machines. Our capabilities include:
              </p>

              <ul className="list-disc list-inside text-sm font-bold">
                <li>Strength testing </li>
                <li>Physical properties testing</li>
                <li>Proof Load Testing</li>
                <li>Break testing</li>
                <li>Prototype testing</li>
              </ul>
            </div>
          </div>

          <div>
            <h3>LIFTING EQUIPMENT INSPECTION</h3>

            <ul className="list-disc list-inside text-sm font-bold">
              <li>Cargo Carrying Units Inspection</li>
              <li>Offshore Containers Inspection</li>
              <li>Proof Load Testing</li>
              <li>LOLER Inspection</li>
              <li>Wire Rope Management</li>
              <li>Heavy Lift Testing</li>
              <li>Crane Inspection</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

export { services_data };
