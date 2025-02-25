import React from "react";
import {
  GridManager,
  ImageGridModel,
  ImageViewer,
  ImageViewer2,
  SubSectionManager,
} from "./ServiceHelperComponents";

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
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Asset Integrity Maintenance (AIM)
                </h3>

                <p>
                  From surface cleaning and contamination removal to specialist
                  coating applications, ScafTech Engineering Services provides
                  comprehensive fabric maintenance solutions to extend asset
                  life and enhance safety.
                </p>
              </div>

              <div className=" py-5">Our Services Include:</div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    Coating & Corrosion Control –
                  </span>
                  Touch-ups, removal, and application of new protective
                  coatings.
                </li>
                <li>
                  <span className="font-bold">Pipework Restoration –</span>
                  Full spool replacements, including NDT, pressure testing,
                  rigging, installation, and tightening.
                </li>
                <li>
                  <span className="font-bold">
                    Standalone or Packaged Services
                  </span>
                  Choose a complete maintenance package or individual services
                  based on your needs.
                </li>
              </ul>

              <div className="py-5">
                With a focus on quality and efficiency, ScafTech Engineering
                Services ensures your assets remain in peak condition.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
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
    name: "OCTG Inspection",
    type: "sub-list",
    url: "/octg-inspection",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">OCTG Inspection</h3>

                <p>
                  ScafTech Engineering Services ensures safe and efficient
                  drilling operations by identifying defects in drill stems that
                  could lead to downhole failures. Our certified engineers
                  conduct thorough inspections in compliance with industry
                  standards like API RP 7G, NS-2, and DS-1. We deliver reliable
                  solutions tailored to maintain well integrity and operational
                  efficiency.
                </p>
              </div>

              <div></div>
            </div>
          </div>

          <div>
            <h3>OCTG Inspections</h3>
            <SubSectionManager constraint={"OCTG Inspection"} />
          </div>
        </div>
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
    name: "Loler Inspection",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/loler-inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10  ">
              <div className=" flex flex-col gap-5">
                <h3 className="font-bold  uppercase"> Loler Inspection</h3>

                <p>
                  LOLER (Lifting Operations and Lifting Equipment Regulations)
                  inspections apply to a wide range of lifting appliances and
                  accessories, including:
                </p>

                <ul className=" list-inside list-disc text-sm font-bold">
                  <li>Cranes of all types</li>
                  <li>Forklift trucks </li>
                  <li>Chain hoists</li>
                  <li>Mobile elevating work platforms</li>
                  <li>Goods lifts</li>
                  <li>
                    Shackles, eye bolts, slings, and other lifting accessories
                  </li>
                </ul>

                <p>
                  As per LOLER Regulation 9, a Thorough Examination of all
                  lifting equipment must be conducted by a competent person to
                  ensure compliance. Lifting equipment, as defined by LOLER,
                  includes any machinery or device used at work for lifting or
                  lowering loads, along with attachments used for anchoring,
                  fixing, or supporting it.
                </p>
              </div>

              <div className="py-10">
                <h3 className="font-bold text-lg">Our Expertise</h3>
                <p>
                  Our team of LEEA-qualified and FGN Factory Act-approved
                  inspection engineers will:
                </p>
                <ul className=" list-inside list-['-_'] text-sm font-bold"></ul>
                <li>Inspect and manage your LOLER Inspection Scheme</li>
                <li> Develop a comprehensive lifting gear register</li>
                <li>
                  {" "}
                  Provide detailed inspection reports in both hard and soft
                  copies for your convenience
                </li>

                <p className="py-10">
                  With our qualified engineers and commitment to excellence, we
                  ensure your equipment meets the highest safety and regulatory
                  standards.{" "}
                </p>
              </div>
            </div>

            <ImageViewer
              images={["/new_img/crane.jpg", "/new_img/rooftop-fall.png"]}
            />
          </div>

          <div className="flex-1">
            <h3>LIFTING EQUIPMENT INSPECTION</h3>

            <SubSectionManager constraint={"Lifting Equipment Inspection"} />
          </div>
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
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase"> Wire Rope inspection</h3>

              <p>
                Numerous studies on the reliability of Non-Destructive Testing
                (NDT) for wire ropes have demonstrated the confidence and
                accuracy of the results achieved through this method. However,
                since there are no formal NDT rejection criteria, all rejection
                standards are based on widely accepted visual inspection
                guidelines.
              </p>
            </div>

            <div>
              <p>
                At ScafTech, we provide the best-in-class wire rope inspection
                and management services, combining NDT and visual inspection
                techniques to ensure the highest levels of safety and
                reliability.
              </p>
            </div>
            <div className="py-10">
              <h3 className="font-bold text-lg">Our Services Deliver: </h3>

              <p>
                <span className="font-bold">Enhanced Safety Performance: </span>
                Ensuring greater reliability and safety in wire rope operations.
              </p>
              <p>
                <span className="font-bold">Cost-Effectiveness: </span>
                Prolonging the lifespan of wire ropes through accurate and
                timely inspections.
              </p>
              <p>
                <span className="font-bold">Detailed Reporting: </span>
                Providing comprehensive inspection reports that include; The
                condition of the inspected rope , Rope type and specifications ,
                Calibration results and settings.
              </p>

              <p className="py-5">
                Our reports are immediate, specific, and aligned with current
                wire rope inspection standards for visual assessment.
              </p>

              <div>
                <h3 className="font-bold text-lg">
                  Advanced Technology for Superior Inspections
                </h3>
                <p>
                  With significant investment in our wire rope inspection
                  technology, we are equipped to detect not only external flaws
                  but also critical internal flaws that are often invisible to
                  the naked eye. This qualitative approach ensures a thorough
                  evaluation of your wire ropes, enhancing safety and
                  performance.
                </p>

                <p className="py-5">
                  Trust ScafTech for reliable, accurate, and industry-leading
                  wire rope inspection services.
                </p>
              </div>
            </div>

            <div className=" ">
              <p>
                {" "}
                With our state-of-the-art equipment and dedicated professionals,
                we deliver reliable, accurate, and compliant testing services
                tailored to your requirements.{" "}
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
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase"> Heavy Lift Testing</h3>

              <p>
                Testing high-tonnage lifting equipment presents unique
                challenges, particularly when sourcing high-capacity test
                weights. ScafTechl, we pride ourselves on being industry leaders
                in lifting equipment inspection services. Our consistent and
                innovative approach ensures that our customers meet the
                stringent requirements of the industry with ease and confidence.
              </p>
            </div>
            <div className="py-10">
              <h3 className="font-bold text-lg">Our Expertise</h3>
              <p>Trust us for all your heavy lift testing needs, including:</p>
              <ul className=" list-inside list-disc text-sm font-bold">
                <li>Tri-plates</li>
                <li> High-capacity cranes </li>
                <li>Spreader beams</li>
              </ul>

              <p className="py-5">
                Our team of experts utilizes advanced solutions, including:
              </p>

              <ul className=" list-inside list-disc text-sm font-bold">
                <li>High-capacity load cells</li>
                <li> Water bags</li>
                <li>In-house engineered dead weights</li>
              </ul>
            </div>

            <div className=" ">
              <p>
                {" "}
                With our state-of-the-art equipment and dedicated professionals,
                we deliver reliable, accurate, and compliant testing services
                tailored to your requirements.{" "}
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

            <ul className=" list-inside list-['-_'] text-sm font-bold">
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
  {
    name: "Crane Inspection",
    type: "sub-sub-list",
    belongsTo: "Lifting Equipment Inspection",
    url: "/crane-inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase">
                {" "}
                ScafTech Engineering Services - Crane Inspection Solutions
              </h3>

              <p>
                We deliver expert inspection services for all crane types,
                including mobile, offshore, overhead, and tower cranes. Our
                comprehensive assessment process encompasses thorough
                examinations, routine in-service inspections, and detailed
                accident investigations.
              </p>
            </div>
            <div className="py-10 ">
              At ScafTech Engineering Services, our team of certified and
              experienced crane inspectors conducts each inspection with
              meticulous attention to detail. Following every inspection, we
              provide our clients with comprehensive reports and findings in
              hard copy format, documenting all aspects of the assessment.
            </div>

            <div className="py-10 ">
              <h3 className="font-bold text-lg">
                ScafTech's Complete Lifting Equipment Services
              </h3>

              <p>
                We offer a full spectrum of lifting equipment inspection and
                testing services:
              </p>

              <ul className="list-disc list-inside text-sm font-bold">
                <li>
                  In-depth inspections of Cargo Carrying Units and Offshore
                  Containers
                </li>
                <li>
                  Rigorous Proof Load Testing and Heavy Lift Testing
                  capabilities
                </li>
                <li>
                  Specialized LOLER (Lifting Operations and Lifting Equipment
                  Regulations) compliance inspections
                </li>
                <li>Professional Wire Rope Management services</li>
                <li>Expert Crane Inspection and certification</li>
              </ul>
            </div>

            <div>
              Trust ScafTech Engineering Services for reliable, thorough, and
              professional lifting equipment inspections that ensure your
              operations meet the highest safety and compliance standards.
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
    name: "Magnetic Particle Inspection",
    type: "sub-sub-list",
    belongsTo: "NDT",
    url: "/magnetic-particle-inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase">
                {" "}
                Magnetic Particle Inspection (MPI)
              </h3>

              <p>
                Magnetic Particle Inspection (MPI) is a method used to detect
                surface and near-surface flaws in ferromagnetic materials such
                as steel and iron. It is primarily utilized for crack detection.
                MPI works by magnetizing a specimen, and if a discontinuity
                exists, the magnetic field is disrupted, creating a leakage
                field. Finely milled iron particles coated with dye pigment are
                applied, which cluster over the discontinuity, making it visible
                under proper lighting conditions.
              </p>
            </div>

            <div className="py-10 ">
              <p>Our MPI procedure includes:</p>

              <ul className=" list-disc text-sm font-bold">
                <li>Pre-cleaning of components.</li>
                <li>Introduction of a magnetic field.</li>
                <li>Application of magnetic media.</li>
                <li>
                  Interpretation of magnetic particle indications by our
                  experienced NDT inspectors.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3>NDT SERViCES</h3>
            <SubSectionManager constraint={"NDT"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Dye Penetrant Testing",
    type: "sub-sub-list",
    belongsTo: "NDT",
    url: "/dye-penetrant-testing",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase">Dye Penetrant Testing</h3>

              <p>
                Dye Penetrant Testing (PT) is a widely used inspection method
                for detecting surface-breaking defects in non-porous materials.
                It involves applying a liquid penetrant to the material's
                surface, allowing it to seep into cracks. Excess penetrant is
                removed, and a developer is applied to draw the penetrant out,
                revealing defects. Our experienced PT inspectors ensure accurate
                interpretation.
              </p>
            </div>

            <div className="py-10 ">
              <p>Defects detected with PT include:</p>

              <ul className=" list-disc text-sm font-bold">
                <li>
                  Rolled Products: Identifies cracks, seams, or laminations.
                </li>
                <li>
                  Castings: Detects cold shuts, hot tears, porosity, blowholes,
                  or shrinkage.
                </li>
                <li>Forgings: Illuminates cracks, laps, or external bursts.</li>
                <li>
                  Welds: Identifies cracks, porosity, undercut, overlap, lack of
                  fusion, or lack of penetration.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3>NDT SERViCES</h3>
            <SubSectionManager constraint={"NDT"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Ultrasonic Testing (UT) ",
    type: "sub-sub-list",
    belongsTo: "NDT",
    url: "/ultrasonic-testing",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase">Ultrasonic Testing (UT)</h3>

              <p>
                Ultrasonic Testing (UT) is a highly effective NDT method that
                uses high-frequency sound waves to detect internal defects in
                materials. A transducer sends ultrasonic waves into a material,
                and any reflection from discontinuities is analyzed to determine
                flaw location and size.
              </p>
            </div>

            <div className="py-10 ">
              <p>UT data can be presented in several formats:</p>

              <ul className=" list-disc text-sm font-bold">
                <li>A-Scan: Displays received ultrasonic energy over time.</li>
                <li>B-Scan: Provides a cross-sectional profile view.</li>
                <li>Forgings: Illuminates cracks, laps, or external bursts.</li>
                <li>
                  C-Scan: Offers a plan-type view of specimen and defects.
                </li>
              </ul>
            </div>

            <div>
              Our team of highly skilled UT technicians ensures accurate
              interpretation of test results.
            </div>
          </div>

          <div>
            <h3>NDT SERViCES</h3>
            <SubSectionManager constraint={"NDT"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Eddy Current Testing (ET) ",
    type: "sub-sub-list",
    belongsTo: "NDT",
    url: "/eddy-current-testing",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div className="runtown mx-auto xl:w-3/5 w-full py-10">
            <div className=" ">
              <h3 className="font-bold  uppercase">
                Eddy Current Testing (ET)
              </h3>

              <p>
                Eddy Current Testing (ET) is a preferred NDT method due to its
                ability to detect surface and near-surface flaws without
                requiring paint removal. This method is highly effective in
                detecting cracks and other discontinuities in conductive
                materials.
              </p>
            </div>

            <div className="py-10 ">
              <p>Advantages of ET include:</p>

              <ul className=" list-disc text-sm font-bold">
                <li>No need for surface preparation or paint removal.</li>
                <li>Immediate detection of defects.</li>
                <li>
                  Sensitivity to small cracks and material inconsistencies.
                </li>
              </ul>
            </div>

            <div>
              ScafTech Engineering Services employs advanced ET technology and
              experienced inspectors to provide reliable assessments.
            </div>
          </div>

          <div>
            <h3>NDT SERViCES</h3>
            <SubSectionManager constraint={"NDT"} />
          </div>
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
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" ">
                <h3 className="font-bold  uppercase">Instrument Calibration</h3>

                <p>
                  At ScafTech Engineering Services, we specialize in the
                  removal, replacement, and calibration of instrumentation,
                  ensuring compliance with international standards. Our
                  calibration services can be conducted either on-site using our
                  mobile laboratories or at our main facility, depending on
                  customer requirements.
                </p>
              </div>

              <div>
                We offer precise calibration for pressure, temperature, flow,
                and load instruments at our base. For more specialized
                calibration needs, we collaborate with certified third-party
                laboratories to guarantee accuracy and reliability, ensuring
                that all equipment meets industry standards.
              </div>
            </div>
            <ImageViewer2
              images={["/new_img/crane.jpg", "/new_img/crane.jpg"]}
              description={
                "Scaftech provides World Class specialist Asset Integrity Assurance  throughout the Asset life-cycle"
              }
            />
          </div>

          <div>
            {/* <h3>NDT SERViCES</h3> */}
            {/* <SubSectionManager constraint={"NDT"} /> */}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Hull Gauging",

    type: "sub-list",

    url: "/hull-gauging",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Hull Gauging</h3>

                <p>
                  ScafTech Engineering Services provides comprehensive hull
                  gauging services to assess the structural integrity of
                  vessels. Our inspections ensure compliance with industry
                  standards by identifying corrosion, material loss, and
                  structural weaknesses.
                </p>
              </div>

              <div>
                We utilize advanced ultrasonic thickness measurement techniques
                to evaluate hull conditions, whether at our main facility or
                on-site using mobile inspection units. For specialized
                assessments, we coordinate with accredited third-party
                laboratories to ensure precise and reliable results.
              </div>
            </div>
            <ImageViewer2
              images={["/new_img/crane.jpg", "/new_img/crane.jpg"]}
              description={
                "Scaftech provides World Class specialist Asset Integrity Assurance  throughout the Asset life-cycle"
              }
            />
          </div>

          <div>
            {/* <h3>NDT SERViCES</h3> */}
            {/* <SubSectionManager constraint={"NDT"} /> */}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "BHA Inspection Services",

    type: "sub-sub-list",

    url: "/bha-inspection",
    belongsTo: "OCTG Inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">BHA Inspection </h3>

                <p>
                  Bottom Hole Assembly (BHA) evaluations are performed in
                  accordance with the latest DS-1 Cat 3-5 and API standards. Our
                  comprehensive BHA inspection services include:
                </p>
              </div>

              <ul className="list-disc list-inside text-sm font-bold">
                <li>Detailed Visual Examination</li>
                <li>Thread Measurement and Gauging</li>
                <li>Magnetic Particle Testing (Wet & Dry Methods)</li>
                <li>Precision Dimensional Analysis </li>
                <li> Optional Refacing Services When Needed</li>
              </ul>

              <p className="py-5">
                Our advanced BHA inspection units are stationed at our tubular
                inspection facility and can be mobilized to client sites as
                required. After inspection, we provide secure online access to
                detailed reports, with hard copies available upon request.
              </p>
            </div>
            <ImageViewer2
              images={["/new_img/crane.jpg", "/new_img/crane.jpg"]}
              description={
                "Scaftech provides World Class specialist Asset Integrity Assurance  throughout the Asset life-cycle"
              }
            />
          </div>

          <div>
            <h3>OCTG Inspections</h3>
            <SubSectionManager constraint={"OCTG Inspection"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Drill Pipe Inspection",

    type: "sub-sub-list",

    url: "/drill-pipe-installation",
    belongsTo: "OCTG Inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Drill Pipe Inspection </h3>

                <p>
                  Our cutting-edge EMI units, equipped with Hall Effect sensors,
                  offer dual-function capabilities. As fully mobile systems, our
                  skilled inspection technicians can rapidly deploy them to
                  drilling rigs and other locations as needed.
                </p>
              </div>
              <div className=" py-5">
                <p>
                  We conduct thorough inspections on both new and used drill
                  pipes using advanced techniques and industry-leading
                  equipment. Our certified professionals adhere strictly to
                  industry standards and follow well-documented Standard
                  Operating Procedures.
                </p>
              </div>

              <p className="py-5">
                After the inspection, clients receive comprehensive reports
                detailing the findings. Digital copies are securely stored
                online, with unique login credentials provided for easy access.
                Hard copies are also available upon request.
              </p>
            </div>
            <ImageViewer2
              images={["/new_img/crane.jpg", "/new_img/crane.jpg"]}
              description={
                "Scaftech provides World Class specialist Asset Integrity Assurance  throughout the Asset life-cycle"
              }
            />
          </div>

          <div>
            <h3>OCTG Inspections</h3>
            <SubSectionManager constraint={"OCTG Inspection"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Casing And Tubing Inspection",

    type: "sub-sub-list",

    url: "/casing-and-tubing",
    belongsTo: "OCTG Inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Casing And Tubing Inspection{" "}
                </h3>

                <p>
                  ScafTech Engineering Services utilizes advanced dual-function
                  EMI units equipped with Hall Effect sensors. These mobile
                  units allow our inspection technicians to promptly deploy to
                  various work locations as required.
                </p>
              </div>
              <div className=" py-5">
                ScafTech provides a complete range of inspection services for
                offshore containers. Our process includes:
              </div>

              <ul className="list-disc list-inside text-sm font-bold">
                <li>OD Blasting</li>
                <li>ID Cleaning</li>
                <li>Spot Wall Thickness Measurements</li>
                <li>Grade Sorting</li>
                <li>Electromagnetic Inspection (EMI) on Tubing Body</li>
                <li>Visual Thread Inspection</li>
                <li>Full-Length Drifting</li>
                <li>Black Light Inspection</li>
                <li>Hydraulic Pressure Testing</li>
                <li>Bucking Services</li>
              </ul>
              <div className=" py-5">
                <p>
                  Based on client requirements, we can execute the full scope or
                  specific aspects of the inspection. Our highly trained
                  inspectors adhere to industry guidelines and follow documented
                  Standard Operating Procedures to ensure accurate and reliable
                  results.
                </p>
              </div>

              <p className="py-5">
                Upon completion, customers receive comprehensive inspection
                reports, with soft copies securely stored online for easy
                access. Each client is provided with a unique username and
                password to retrieve reports conveniently, with hard copies
                available upon request.
              </p>
            </div>
            <ImageViewer2
              images={["/new_img/crane.jpg", "/new_img/crane.jpg"]}
              description={
                "Scaftech provides World Class specialist Asset Integrity Assurance  throughout the Asset life-cycle"
              }
            />
          </div>

          <div>
            <h3>OCTG Inspections</h3>
            <SubSectionManager constraint={"OCTG Inspection"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Riser Inspection & Maintenance",

    type: "sub-sub-list",

    url: "/riser-inspection",
    belongsTo: "OCTG Inspection",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Riser Inspection & Maintenance
                </h3>

                <p>
                  ScafTech Engineering Services provides specialized riser
                  inspection and maintenance for deepwater drilling operations.
                  Our services ensure optimal performance, safety, and
                  compliance with industry standards.
                </p>
              </div>
              <div className=" py-5">Our Services Include:</div>

              <ul className="list-disc list-inside text-sm font-bold">
                <li>
                  <span className="font-bold">Disassembly & Cleaning –</span>
                  Full riser disassembly, sandblasting, and high-pressure water
                  blasting.
                </li>
                <li>
                  <span className="font-bold">Comprehensive Inspection –</span>
                  Dimensional checks, ultrasonic testing, magnetic particle &
                  dye penetrant inspection.
                </li>
                <li>
                  <span className="font-bold"> Component Maintenance –</span>
                  Seal replacement, riser collars, thrust plates, and buoyancy
                  module repairs.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Final Processing & Reassembly –
                  </span>
                  Coating application, pressure testing, and quality assurance.
                </li>
              </ul>
              <div className=" py-5">
                <p>
                  With experienced technicians and cutting-edge technology, we
                  ensure efficient and reliable service for your riser systems.
                </p>
              </div>
            </div>
            <ImageViewer2
              images={["/new_img/crane.jpg", "/new_img/crane.jpg"]}
              description={
                "Scaftech provides World Class specialist Asset Integrity Assurance  throughout the Asset life-cycle"
              }
            />
          </div>

          <div>
            <h3>OCTG Inspections</h3>
            <SubSectionManager constraint={"OCTG Inspection"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "QAQC",

    type: "sub-list",

    url: "/qaqc",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">QAQC</h3>

                <p>
                  At ScafTech Engineering Services, we deliver comprehensive
                  QA/QC inspections to ensure your project meets the highest
                  quality and safety standards across various industries,
                  including oil & gas, marine, and construction.
                </p>
              </div>
              <div className=" py-5">Our Services Include:</div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    Visual & Non-Destructive Testing –
                  </span>
                  Detecting defects without damaging materials.
                </li>
                <li>
                  <span className="font-bold">
                    Welding & Coating Inspections –
                  </span>
                  Ensuring structural integrity and corrosion resistance.
                </li>
                <li>
                  <span className="font-bold">
                    Proactive Quality Assurance –
                  </span>
                  Identifying and resolving potential issues before they
                  escalate.
                </li>
              </ul>
              <div className=" py-5">
                <p>Why Choose Scaftech?</p>

                <ul className="list-disc list-inside font-bold">
                  <li> Certified & Experienced Inspectors</li>
                  <li>Tailored Inspection Programs</li>
                  <li>On-Site & Third-Party Inspections</li>
                  <li>Accurate Data Analysis with Advanced Tools</li>
                </ul>
              </div>

              <div>
                We provide reliable, unbiased, and efficient QA/QC solutions,
                giving you peace of mind that your project complies with all
                industry regulations
              </div>
            </div>
          </div>

          <div>
            {/* <h3>OCTG Inspections</h3>
            <SubSectionManager constraint={"OCTG Inspection"} /> */}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "3rd Party Inspection",

    type: "sub-list",

    url: "/3rd-party",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">3rd Party Inspection</h3>

                <p>
                  At ScafTech Engineering Services, we provide independent
                  third-party inspections across industries such as oil & gas,
                  marine, construction, manufacturing, and agriculture to ensure
                  compliance with industry standards.
                </p>
              </div>
              <div className=" py-5">What we Offer:</div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    Defect & Non-Conformity Detection –
                  </span>
                  Identifying deviations and recommending corrective actions.
                </li>
                <li>
                  <span className="font-bold">
                    Regulatory Compliance Assurance –
                  </span>
                  Ensuring your products, facilities, and equipment meet quality
                  and safety standards.
                </li>
                <li>
                  <span className="font-bold">
                    Advanced Inspection Techniques –
                  </span>
                  Utilizing cutting-edge technology for accurate assessments.
                </li>
              </ul>

              <div className="py-5">
                With our expert inspectors and modern inspection practices, we
                help you mitigate risks, improve efficiency, and maintain
                high-quality standards in your operations. Partner with ScafTech
                today for reliable third-party inspection solutions.
              </div>
            </div>
          </div>

          <div>
            {/* <h3>OCTG Inspections</h3>
            <SubSectionManager constraint={"OCTG Inspection"} /> */}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Marine Warranty Survey (MWS)",
    type: "sub-list",
    url: "/marine-warranty-survey",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Marine Warranty Survey (MWS)
                </h3>

                <p>
                  At ScafTech Engineering Services, we provide Marine Warranty
                  Survey (MWS) services to ensure safe, efficient, and compliant
                  marine operations. Our expert surveyors assess risks, monitor
                  activities, and verify compliance with industry standards.
                </p>
              </div>
              <div className=" py-5">Our MWS Services Include:</div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">Pre-Project Surveys –</span>
                  Assessing vessel suitability, risk factors, and regulatory
                  compliance.
                </li>
                <li>
                  <span className="font-bold">On-Site Monitoring–</span>
                  Ensuring safe vessel and equipment usage during operations.
                </li>
                <li>
                  <span className="font-bold">Offshore Surveys–</span>
                  Evaluating offshore platforms, drilling rigs, and floating
                  units.
                </li>
                <li>
                  <span className="font-bold">
                    Loadout & Transportation Surveys –
                  </span>
                  Verifying cargo safety for offshore structures.
                </li>
                <li>
                  <span className="font-bold">
                    Offshore Installation Surveys–
                  </span>
                  Inspecting vessels and equipment for subsea installations.
                </li>
              </ul>
              <div className="py-5">
                With a proven track record in the oil & gas and marine
                industries, ScafTech guarantees high-quality, reliable, and
                industry-compliant MWS solutions tailored to your needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Risk-Based Inspection (RBI)",
    type: "sub-list",
    url: "/risk-based-inspection",
    belongsTo: "Inspection Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Risk-Based Inspection (RBI)
                </h3>

                <p>
                  At ScafTech Engineering Services, our Risk-Based Inspection
                  (RBI) service ensures proactive asset protection and
                  operational efficiency. We provide a strategic approach that
                  integrates detailed risk assessments, customized inspection
                  plans, and data-driven insights to enhance asset reliability
                  and performance.
                </p>
              </div>

              <div className="py-5">
                Using advanced inspection techniques and cutting-edge
                technology, we deliver precise evaluations of asset conditions,
                empowering organizations to make informed decisions on
                maintenance and asset management ultimately optimizing costs and
                extending equipment lifespan.
              </div>
              <div className="py-5">
                Enhance your asset integrity with ScafTech. Contact us today to
                learn how our RBI services can transform your risk management
                strategy.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Emergency Response Services",
    type: "sub-list",
    url: "/emmergency-response-services",
    belongsTo: "Asset Integrity Maintenance( AIM)",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Emergency Response Services
                </h3>

                <p>
                  At ScafTech Engineering Services, we specialize in Emergency
                  Response Solutions designed for high-risk operations across
                  multiple industries. Our expert teams are trained to handle
                  hazardous situations efficiently, ensuring safety and
                  minimizing risks in critical environments such as oil & gas,
                  construction, and manufacturing.
                </p>
              </div>

              <div>
                <div className=" py-5">
                  Our Emergency Response Solutions Include:
                </div>

                <ul className="list-disc list-inside text-sm ">
                  <li>Standby Rescue</li>
                  <li>Confined Space Rescue & Management</li>
                  <li> Work at Height Rescue</li>
                  <li> Confined Space Entry</li>
                  <li> Authorized Gas Testing</li>
                </ul>
              </div>
              <div>
                <div className=" py-5">
                  Key Operations Requiring Emergency Response:
                </div>

                <ul className="list-disc list-inside text-sm ">
                  <li>Tank Cleaning & Maintenance</li>
                  <li> Pipeline & Silo Maintenance</li>
                  <li> Underground Utility Work</li>
                  <li> Construction & Infrastructure</li>
                  <li> Work at Height</li>
                  <li> Pressure Vessel Inspections</li>
                  <li> Shipyard Maintenance</li>
                  <li> Hazardous Waste Management</li>
                </ul>
              </div>

              <div className="py-5">
                As a leading emergency response provider, ScafTech Engineering
                Services ensures rapid, professional, and reliable rescue
                solutions, keeping your workforce safe and operations compliant.
                Contact us today for expert emergency response support.
              </div>
            </div>
          </div>

          <div>
            {/* <GridManager constraint="Inspection Services" /> */}
            <h3> EMERGENCY RESPONSE SOLUTIONS</h3>
            <SubSectionManager constraint={"Emergency Response Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Standby Rescue Operations",
    type: "sub-sub-list",
    url: "/standby-rescue-operation",
    belongsTo: "Emergency Response Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Emergency Response Services
                </h3>

                <p>
                  At ScafTech Engineering Services, we specialize in Emergency
                  Response Solutions designed for high-risk operations across
                  multiple industries. Our expert teams are trained to handle
                  hazardous situations efficiently, ensuring safety and
                  minimizing risks in critical environments such as oil & gas,
                  construction, and manufacturing.
                </p>
              </div>

              <div>
                <div className=" py-5">
                  Our Emergency Response Solutions Include:
                </div>

                <ul className="list-disc list-inside text-sm ">
                  <li>Standby Rescue</li>
                  <li>Confined Space Rescue & Management</li>
                  <li> Work at Height Rescue</li>
                  <li> Confined Space Entry</li>
                  <li> Authorized Gas Testing</li>
                </ul>
              </div>
              <div>
                <div className=" py-5">
                  Key Operations Requiring Emergency Response:
                </div>

                <ul className="list-disc list-inside text-sm ">
                  <li>Tank Cleaning & Maintenance</li>
                  <li> Pipeline & Silo Maintenance</li>
                  <li> Underground Utility Work</li>
                  <li> Construction & Infrastructure</li>
                  <li> Work at Height</li>
                  <li> Pressure Vessel Inspections</li>
                  <li> Shipyard Maintenance</li>
                  <li> Hazardous Waste Management</li>
                </ul>
              </div>

              <div className="py-5">
                As a leading emergency response provider, ScafTech Engineering
                Services ensures rapid, professional, and reliable rescue
                solutions, keeping your workforce safe and operations compliant.
                Contact us today for expert emergency response support.
              </div>
            </div>
          </div>

          <div>
            <h3> EMERGENCY RESPONSE SOLUTIONS</h3>
            <SubSectionManager constraint={"Emergency Response Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Confined Space Management",
    type: "sub-sub-list",
    url: "/confined-space-management",
    belongsTo: "Emergency Response Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Confined Space Management
                </h3>

                <p>
                  Confined spaces present unique risks due to limited access,
                  poor ventilation, and hazardous conditions. These
                  environments—such as tanks, silos, pipelines, and underground
                  facilities—require expert management to ensure worker safety
                  and regulatory compliance.
                </p>
              </div>

              <div>
                <div className=" py-5">
                  Our Approach to Confined Space Management:
                </div>

                <ul className="list-disc list-inside text-sm ">
                  <li>
                    <span className="font-bold">Risk Assessment –</span>
                    We conduct thorough evaluations to identify hazards and
                    implement preventive measures.
                  </li>
                  <li>
                    <span className="font-bold">Hazard Control –</span>
                    Our team manages risks like poor ventilation and toxic gases
                    before entry.
                  </li>
                  <li>
                    <span className="font-bold">Continuous Monitoring –</span>
                    Advanced technology ensures real-time tracking of gas
                    levels, oxygen content, and environmental conditions.
                  </li>
                  <li>
                    <span className="font-bold">
                      Emergency Planning & Standby Rescue –
                    </span>
                    Every operation includes a tailored rescue plan with trained
                    standby teams ready for immediate response.
                  </li>
                </ul>
              </div>

              <div className="py-5">
                Partner with ScafTech Engineering Services for safe, efficient,
                and compliant confined space management solutions.
              </div>
            </div>
          </div>

          <div>
            <h3> EMERGENCY RESPONSE SOLUTIONS</h3>
            <SubSectionManager constraint={"Emergency Response Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Confined Space Entry",
    type: "sub-sub-list",
    url: "/confined-space-entry",
    belongsTo: "Emergency Response Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Confined Space Entry</h3>

                <p>
                  At ScafTech Engineering Services, our Confined Space Entry
                  service ensures safety and efficiency when working in confined
                  or restricted spaces. Tanks, vessels, silos, and underground
                  utility spaces pose significant hazards due to poor
                  ventilation, hazardous materials, and restricted access. Our
                  expert team implements strict safety protocols to mitigate
                  risks and safeguard workers in these high-risk environments.
                </p>
              </div>

              <div className="py-5">
                Here’s your Authorized Gas Tester content, rephrased, concise,
                and with ScafTech Engineering Services replacing JC
                International:
              </div>
            </div>
          </div>

          <div>
            <h3> EMERGENCY RESPONSE SOLUTIONS</h3>
            <SubSectionManager constraint={"Emergency Response Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Authorized Gas Tester",
    type: "sub-sub-list",
    url: "/authorized-gas-tester",
    belongsTo: "Emergency Response Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Authorized Gas Tester</h3>

                <p>
                  At ScafTech Engineering Services, we provide expert gas
                  testing services to ensure safety and compliance in industrial
                  operations. Our certified professionals use advanced
                  technology to detect hazardous gases and maintain a secure
                  work environment.
                </p>
              </div>

              <div className=" py-5">What we Offer:</div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    Comprehensive Gas Analysis –
                  </span>
                  Highly trained experts who follow industry best practices and
                  safety regulations.
                </li>
                <li>
                  <span className="font-bold">Certified Technicians –</span>
                  Highly trained experts who follow industry best practices and
                  safety regulations.
                </li>
                <li>
                  <span className="font-bold">Regulatory Compliance –</span>
                  All gas testing aligns with local and international safety
                  standards to ensure compliance.
                </li>
                <li>
                  <span className="font-bold">Real-Time Monitoring –</span>
                  Continuous gas detection with instant alerts for leaks or
                  hazardous conditions.
                </li>
                <li>
                  <span className="font-bold">Detailed Reporting –</span>
                  Clear reports with analysis results, safety recommendations,
                  and compliance documentation.
                </li>
                <li>
                  <span className="font-bold">Emergency Response –</span>
                  Rapid response services to handle gas hazards effectively.
                </li>
              </ul>

              <div className="py-5">
                By partnering with ScafTech Engineering Services, you ensure
                precision, safety, and regulatory adherence in all gas testing
                operations.
              </div>
            </div>
          </div>

          <div>
            <h3> EMERGENCY RESPONSE SOLUTIONS</h3>
            <SubSectionManager constraint={"Emergency Response Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Work at Height Rescue",
    type: "sub-sub-list",
    url: "/work-at-height-rescue",
    belongsTo: "Emergency Response Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Work at Height Rescue</h3>

                <p>
                  At ScafTech Engineering Services, we prioritize safety and
                  rapid response in work-at-height operations. Our rescue
                  services ensure swift, efficient, and safe emergency
                  interventions, minimizing risks for personnel working at
                  elevated locations.
                </p>
              </div>

              <div className=" py-5">What we Offer:</div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    Emergency Response Preparedness –
                  </span>
                  Risk assessments and customized rescue plans tailored to each
                  site.
                </li>
                <li>
                  <span className="font-bold">
                    Highly Trained Rescue Technicians –
                  </span>
                  IRATA-certified rope access professionals skilled in complex
                  height rescues.
                </li>
                <li>
                  <span className="font-bold">Specialized Equipment –</span>
                  Advanced rope access gear, harnesses, and evacuation systems
                  meeting industry standards.
                </li>
                <li>
                  <span className="font-bold">Rapid Deployment –</span>
                  Quick mobilization for immediate rescue execution, reducing
                  downtime and hazards.
                </li>
                <li>
                  <span className="font-bold">
                    Comprehensive Rescue Plans –
                  </span>
                  Strategies for falls, entrapments, and medical emergencies to
                  ensure smooth operations.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Safety Training and Drills –
                  </span>
                  Proactive training programs to equip teams with essential
                  rescue skills.
                </li>
                <li>
                  <span className="font-bold"> Post-Rescue Support –</span>
                  Detailed incident analysis and reporting for continuous safety
                  improvement.
                </li>
              </ul>

              <div className="py-5">
                Trust ScafTech Engineering Services for expert work-at-height
                rescue solutions, ensuring safety, compliance, and operational
                efficiency.
              </div>
            </div>
          </div>

          <div>
            <h3> EMERGENCY RESPONSE SOLUTIONS</h3>
            <SubSectionManager constraint={"Emergency Response Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Confined Space Rescue",
    type: "sub-sub-list",
    url: "/confined-space-rescue",
    belongsTo: "Emergency Response Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Confined Space Rescue </h3>

                <p>
                  At ScafTech Engineering Services, we specialize in confined
                  space rescue solutions across Nigeria and Africa. Our team of
                  highly skilled rescue professionals delivers rapid emergency
                  response, ensuring the safety of personnel working in confined
                  or hazardous environments.
                </p>
              </div>

              <div className=" py-5">
                Why Choose Our Confined Space Rescue Services?
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">Expert Rescue Teams –</span>
                  Our certified specialists undergo rigorous training and
                  utilize cutting-edge rescue equipment to execute efficient and
                  safe extractions during emergencies.
                </li>
                <li>
                  <span className="font-bold">
                    Immediate Response & Recovery –
                  </span>
                  Available 24/7 for swift deployment, minimizing risks,
                  downtime, and potential incidents
                </li>
                <li>
                  <span className="font-bold">Thorough Risk Assessments –</span>
                  We conduct detailed hazard evaluations before operations,
                  developing site-specific rescue strategies to enhance safety.
                </li>
                <li>
                  <span className="font-bold">Regulatory Compliance –</span>
                  Our procedures align with international safety standards,
                  helping businesses maintain compliance and reduce legal risks.
                </li>
                <li>
                  <span className="font-bold">Customized Rescue Plans –</span>
                  We offer tailored rescue strategies designed to meet the
                  unique safety requirements of various industries.
                </li>
              </ul>

              <div className="py-5">
                At ScafTech Engineering Services, we are committed to workplace
                safety, emergency preparedness, and operational efficiency in
                every confined space rescue mission. Partner with us to ensure a
                safer work environment with fully compliant rescue solutions.
              </div>
            </div>
          </div>

          <div>
            <h3> EMERGENCY RESPONSE SOLUTIONS</h3>
            <SubSectionManager constraint={"Emergency Response Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Shutdown Maintenance",
    type: "sub-list",
    url: "/shutdown-maintenance",
    belongsTo: "Asset Integrity Maintenance( AIM)",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Shutdown Maintenance </h3>

                <p>
                  At ScafTech Engineering Services, we provide comprehensive
                  fabric maintenance solutions, ensuring optimal asset integrity
                  and longevity. From cleaning and contaminant removal to the
                  application of specialized coatings, our expert team delivers
                  top-tier maintenance services.
                </p>
              </div>

              <div className="py-5">
                Our process often reveals the need for touch-ups, coating
                removal, and reapplication, along with thorough cleaning. In
                cases where coating failure leads to pipework corrosion, we
                offer full spool replacement, including NDT, pressure testing,
                coating, rigging, installation, and tightening as necessary.
              </div>
              <div className="py-5">
                While many clients opt for complete maintenance packages,
                ScafTech Engineering Services also offers individual services
                tailored to specific project needs.
              </div>
              <div className="py-5">
                Let us help you maintain a safe, efficient, and compliant
                operational environment. Partner with us for reliable shutdown
                maintenance solutions.
              </div>
              <div className="py-5">
                It looks like you want a professional and concise rewrite of the
                rope access content under ScafTech Engineering Services for a
                website.
              </div>
            </div>
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Rope Access Solutions",
    type: "sub-sub-list",
    url: "/rope-access",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Rope Access Solutions </h3>

                <p>
                  At ScafTech Engineering Services, we specialize in safe,
                  efficient, and high-quality rope access solutions for the oil
                  & gas, marine, and construction industries. Our
                  IRATA-certified technicians use advanced rope access
                  techniques to perform inspections, maintenance, and NDT
                  services in hard-to-reach areas with minimal disruption to
                  operations.
                </p>
              </div>

              <div className=" py-5">Why Choose ScafTech Rope Access?</div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold"> Highly Skilled Team –</span>
                  Certified Level 3, 2, and 1 rope access professionals with
                  expertise in NDT techniques such as MT, PT, UT, VT, and Eddy
                  Current Testing.
                </li>
                <li>
                  <span className="font-bold">
                    Cost-Effective & Efficient –
                  </span>
                  Faster deployment compared to traditional scaffolding,
                  reducing downtime and project costs.
                </li>
                <li>
                  <span className="font-bold"> Versatile Applications –</span>
                  Expertise in confined space operations, overboard inspections,
                  and lifting gear assessments.
                </li>
              </ul>

              <div className="py-5">
                With ScafTech Engineering Services, you get precision, safety,
                and excellence in every rope access project.
              </div>
            </div>
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Installation Services",
    type: "sub-sub-list",
    url: "/installation-services",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Installation Services </h3>

                <p>
                  At ScafTech Engineering Services, we offer specialized
                  installation solutions using IRATA-certified rope access
                  technicians, ensuring efficiency, safety, and precision in
                  challenging environments.
                </p>
              </div>

              <div className=" py-5 flex flex-col gap-2">
                <h4 className="font-bold">Our Installation Capabilities</h4>
                <p>
                  We provide expert installation services for various
                  structures, including:
                </p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>Cladding and glazing systems</li>
                <li>Signs, banners, and display installations</li>
                <li>Ground anchors (fixing and testing)</li>
                <li>Ducts and conduits</li>
                <li>
                  Access and safety systems (including netting and fall
                  protection)
                </li>
                <li>Crane infrastructures</li>
                <li>Teflon fabric structures</li>
                <li> Anode installations</li>
                <li>Lightning conductors (installation and removal)</li>
                <li>Flare tip replacement and maintenance</li>
                <li>Fibre optic lighting systems</li>
                <li>Gas pipeline installations</li>
              </ul>

              <div className="py-5">
                With a commitment to safety, efficiency, and compliance,
                ScafTech Engineering Services ensures seamless installation
                solutions across various industries.
              </div>
            </div>
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "High-Rise Building Maintenance",
    type: "sub-sub-list",
    url: "/high-rise-building-maintenance",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  High-Rise Building Maintenance{" "}
                </h3>

                <p>
                  Maintaining high-rise buildings—especially aging
                  structures—often requires access to hard-to-reach areas that
                  lack fixed access systems, ladders, or walkways.
                </p>
                <p className="py-5">
                  At ScafTech Engineering Services, we use advanced rope access
                  techniques to perform cost-effective, non-intrusive
                  maintenance, ensuring minimal disruption to building
                  occupants.
                </p>
              </div>

              <div className=" py-5 flex flex-col gap-2">
                {/* <h4 className="font-bold">Our Services Include:</h4> */}
                <p>Our Services Include:</p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>Facade cleaning and window maintenance</li>
                <li>Painting and concrete repairs</li>
                <li>Sealant and mastic applications</li>
                <li>Bird deterrent system installation</li>
                <li>Signage hanging and removal</li>
                <li> Atrium and steelwork cleaning</li>
                <li>Dangerous masonry removal</li>
                <li> Lagging and waterproofing</li>
                <li>Telecom system installation and removal</li>
                <li> Electrical testing and lighting repairs</li>
              </ul>
              <div className=" py-5 flex flex-col gap-2">
                {/* <h4 className="font-bold">Our Services Include:</h4> */}
                <p>Why Choose Rope Access?</p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold"> Cost-Effective –</span>
                  Eliminates the need for costly scaffolding or mechanical lifts
                </li>
                <li>
                  <span className="font-bold">Minimal Disruption –</span>
                  Work can be completed efficiently, even during silent hours.
                </li>
                <li>
                  <span className="font-bold"> Versatility –</span>
                  Our IRATA-certified technicians can access almost any part of
                  a structure.
                </li>
              </ul>

              <div className="py-5">
                With a team of experienced IRATA Level 1, 2, and 3 rope access
                technicians, ScafTech Engineering Services ensures safe,
                efficient, and high-quality building maintenance solutions
                tailored to your needs.
              </div>
            </div>
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Scaffolding & Access Solutions",
    type: "sub-list",
    url: "/scaffolding-and-access-solutions",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Scaffolding & Access Solutions
                </h3>

                <p>
                  At ScafTech Engineering Services, we provide comprehensive
                  scaffolding solutions tailored to meet the needs of various
                  industries. Whether for construction, maintenance, or
                  industrial projects, we ensure safe and efficient access to
                  hard-to-reach areas.
                </p>
              </div>

              <div className=" py-5 flex flex-col gap-2">
                {/* <h4 className="font-bold">Our Services Include:</h4> */}
                <p>Our Scaffolding Services Include:</p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    {" "}
                    Custom Scaffold Design & Installation –
                  </span>
                  Engineered solutions for load-bearing structures and
                  extended-duration projects
                </li>
                <li>
                  <span className="font-bold">
                    Scaffold Inspection & Compliance –
                  </span>
                  Ensuring structures meet safety standards and industry
                  regulations.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Worksite & Training Center Programs –
                  </span>
                  Hands-on scaffold training for personnel at both our training
                  facilities and on-site locations.
                </li>
              </ul>

              <div className="py-5">
                Our certified scaffold specialists adhere to the latest industry
                standards, delivering safe, reliable, and efficient access
                solutions for any project.
              </div>
              <div className="py-5">
                Let ScafTech Engineering Services handle your scaffolding needs
                with precision and professionalism.
              </div>
            </div>
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Welding & Fabrication",
    type: "sub-list",
    url: "/welding-and-fabrication",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Welding & Fabrication</h3>

                <p>
                  At ScafTech Engineering Services, our certified welders bring
                  expertise across a wide range of materials, standards, and
                  procedures, ensuring precision and durability in every
                  project.
                </p>
              </div>

              <div className=" py-5 flex flex-col gap-2">
                {/* <h4 className="font-bold">Our Services Include:</h4> */}
                <p>Our Capabilities Include:</p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    Weld Repairs & Structural Fabrication –
                  </span>
                  Addressing defects and ensuring structural integrity.
                </li>
                <li>
                  <span className="font-bold">
                    Spool & Piping Fabrication –
                  </span>
                  Custom solutions for industrial and offshore applications.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    On-Site & Workshop Fabrication –
                  </span>
                  Services available at your location or in our fully equipped
                  fabrication facility.
                </li>
              </ul>

              <div className="py-5">
                With advanced cutting, shaping, and beveling equipment, we
                handle both thin and heavy-wall pipes and plates. Our modern
                welding and heat treatment fleet allows us to deliver
                high-quality results efficiently.
              </div>
              <div className="py-5">
                Trust ScafTech Engineering Services for precision, reliability,
                and industry-leading expertise in welding and fabrication.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Blasting & Painting",
    type: "sub-list",
    url: "/blasting-and-painting",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Blasting & Painting</h3>

                <p>
                  At ScafTech Engineering Services, we specialize in surface
                  preparation and protective coatings for new and existing
                  facilities, ensuring durability and compliance with industry
                  standards.
                </p>
              </div>

              <div className=" py-5 flex flex-col gap-2">
                {/* <h4 className="font-bold">Our Services Include:</h4> */}
                <p>Our Services Include:</p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">Remedial & Touch-Up Work –</span>
                  Extending the lifespan of existing structures.
                </li>
                <li>
                  <span className="font-bold">
                    Complete Coating Solutions –
                  </span>
                  High-quality finishing for new equipment and facilities.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Advanced Surface Preparation –
                  </span>
                  Utilizing sandblasting, grit blasting, water blasting, and
                  bristle brushing to achieve the required surface finish.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Custom Coating Applications–
                  </span>
                  Meeting subsea and topside coating specifications using varied
                  application techniques.
                </li>
              </ul>

              <div className="py-5">
                Our certified coating inspectors ensure every project meets
                quality and performance standards, delivering long-lasting
                protection for your assets.
              </div>
              <div className="py-5">
                Trust ScafTech Engineering Services for precision, expertise,
                and excellence in blasting and painting solutions.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Insulation & Cladding",
    type: "sub-list",
    url: "/insulation-and-cladding",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Insulation & Cladding</h3>

                <p>
                  At ScafTech Engineering Services, we specialize in the
                  installation and removal of all types of insulation and
                  cladding for various industries, including oil & gas, process
                  and pipework, and the chemical sector.
                </p>
              </div>

              <div className=" py-5 flex flex-col gap-2">
                {/* <h4 className="font-bold">Our Services Include:</h4> */}
                <p>Our Services Include:</p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">
                    High & Low-Temperature Insulation –
                  </span>
                  Covering pipework, valves, flanges, vessels, and plant
                  equipment.
                </li>
                <li>
                  <span className="font-bold">
                    Air Conditioning & Boiler Systems –
                  </span>
                  Efficient insulation for plant rooms and HVAC systems. •
                  Comprehensive Solutions – Offering design, installation, and
                  maintenance of insulation and cladding.
                </li>
                <li>Thermal insulation solutions.</li>
                <li>Trace heating systems.</li>
                <li>Traditional ductwork installations.</li>
                <li>Sheet metal cladding.</li>
                <li>Acoustic insulation for noise reduction.</li>
              </ul>

              <div className="py-5">
                With a team of highly skilled insulation technicians, we help
                clients reduce maintenance costs, enhance personnel protection,
                improve energy efficiency, and provide soundproofing solutions.
              </div>
              <div className="py-5">
                ScafTech Engineering Services—your trusted partner for advanced
                insulation and cladding solution
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Heat Exchange/Boiler Tube Cleaning",
    type: "sub-list",
    url: "/heat-exchange-tube-cleaning",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Heat Exchange/Boiler Tube Cleaning
                </h3>

                <p>
                  At ScafTech Engineering Services, we specialize in boiler tube
                  and pressure vessel cleaning, ensuring efficiency and minimal
                  downtime.
                </p>
              </div>

              <div className=" py-5 flex flex-col gap-2">
                {/* <h4 className="font-bold">Our Services Include:</h4> */}
                <p>Our Services Include:</p>
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  <span className="font-bold">High-Pressure Cleaning –</span>
                  Utilizing diesel-powered UHP machines for deep and thorough
                  cleaning.
                </li>
                <li>
                  <span className="font-bold">Precision Water Jetting –</span>
                  Our expert team determines the appropriate PSI for safe and
                  effective tube cleaning.
                </li>
                <li>
                  <span className="font-bold">
                    Rope Access & NDT Expertise –
                  </span>
                  Our technicians, certified in both NDT and rope access,
                  conduct inspections and maintenance even in hard-to-reach
                  areas.
                </li>
              </ul>

              <div className="py-5">
                With ScafTech Engineering Services, you get industry-leading
                cleaning solutions that enhance operational efficiency and
                extend equipment lifespan.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Valve Maintenance",
    type: "sub-list",
    url: "/valve-maintenance",
    belongsTo: "Shutdown Maintenance",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Valve Maintenance</h3>

                <p>
                  Valves play a crucial role in pipeline and industrial system
                  efficiency. At ScafTech Engineering Services, our expert
                  engineers ensure the reliability and longevity of your valves
                  through comprehensive maintenance solutions.
                </p>
              </div>

              <div className="py-5">
                From routine servicing to urgent repairs, we provide end-to-end
                valve care, optimizing performance and minimizing downtime.
              </div>
              <div className="py-5">
                Safeguard your operations and protect your investments with
                ScafTech Engineering Services' Valve Maintenance Solutions.
                Contact us today to learn how we can enhance your asset
                performance and operational efficiency.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Shutdown Maintenance"} />
          </div>
        </div>
      </div>
    ),
  },

  {
    name: "Tanks & Vessel Services",
    type: "sub-list",
    url: "/tanks-and-vessel-services",
    belongsTo: "Asset Integrity Maintenance( AIM)",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Tanks & Vessel Services
                </h3>

                <p>
                  Scaftech Tank Cleaning service involves the use of high
                  pressure water to effectively remove residue and contaminants
                  from STORAGE tanks, SILO AND BULK TANKS In order to enhance
                  the overall performance and longevity of your tanks.
                </p>
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Tanks & Vessel Services</h3>
            <SubSectionManager constraint={"Tanks & Vessel Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Tank Cleaning",
    type: "sub-list",
    url: "/tank-cleaning",
    belongsTo: "Tanks & Vessel Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Tank Cleaning</h3>

                <p>
                  Valves play a crucial role in pipeline and industrial system
                  efficiency. At ScafTech Engineering Services, our expert
                  engineers ensure the reliability and longevity of your valves
                  through comprehensive maintenance solutions.
                </p>
              </div>

              <div className="py-5">
                From routine servicing to urgent repairs, we provide end-to-end
                valve care, optimizing performance and minimizing downtime.
              </div>
              <div className="py-5">
                Safeguard your operations and protect your investments with
                ScafTech Engineering Services' Valve Maintenance Solutions.
                Contact us today to learn how we can enhance your asset
                performance and operational efficiency.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Tanks & Vessel Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "UHP Water Blasting",
    type: "sub-list",
    url: "/uhp-water-blasting",
    belongsTo: "Tanks & Vessel Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">UHP Water Blasting</h3>

                <p>
                  ScafTech Engineering Services provides Ultra-High-Pressure
                  (UHP) Water Blasting as an effective alternative to grit
                  blasting, offering dust-free, environmentally friendly surface
                  preparation with no cleanup costs.
                </p>
              </div>

              <div className="py-5">
                Our advanced UHP equipment operates at pressures up to 40,000
                psi, effectively removing extreme corrosion, epoxy paint,
                coatings, and concrete. This method is widely preferred for
                offshore gas platforms and petrochemical plants due to its
                efficiency and safety.
              </div>
              <div className="py-5">
                Various adaptors enable specialized applications, including pipe
                cleaning, tube bundle cleaning, concrete cutting, and internal
                tank cleaning for both onshore and offshore projects.
              </div>
              <div className="py-5">
                With a team of over 15 IRATA-certified rope access technicians,
                ScafTech Engineering Services ensures precision and safety in
                every project. Each team consists of highly trained
                professionals familiar with UHP water blasting equipment and
                IRATA workplace safety standards.
              </div>
              <div className="py-5">
                For reliable and efficient UHP Water Blasting services, trust
                ScafTech Engineering Services to deliver exceptional results.
                Contact us today to learn more.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Tanks & Vessel Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Inspection Services",
    type: "sub-list",
    url: "/tank-inspection-services",
    belongsTo: "Tanks & Vessel Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">Inspection Services</h3>

                <p>
                  ScafTech Engineering Services provides specialized inspection
                  services for tanks and vessels across various industrial
                  sectors in Nigeria.
                </p>
              </div>
              <div className=" py-5">
                Our IRATA-certified Rope Access technicians possess extensive
                experience and qualifications to carry out the following
                inspections::
              </div>

              <ul className="list-disc list-inside text-sm ">
                <li>
                  Non-Destructive Testing (NDT) Services for Tanks and Vessels
                </li>
                <li>
                  Lifting Operations and Lifting Equipment Regulations (LOLER)
                  Inspections
                </li>
                <li>Coating Application and Inspection</li>
                <li>Corrosion Surveys and Integrity Assessments</li>
                <li>Internal and External Visual Inspections</li>
              </ul>

              <div className="py-5">
                Regular inspections and testing are crucial to maintaining the
                safety and structural integrity of key industrial assets. By
                utilizing advanced rope access techniques, we minimize downtime
                and offer a cost-effective alternative to traditional access
                methods.
              </div>
              <div className="py-5">
                For professional and efficient inspection services, trust
                ScafTech Engineering Services to enhance the longevity and
                reliability of your tanks and vessels. Contact us today to learn
                more.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Tanks & Vessel Services"} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Rehabilitations & Maintenance",
    type: "sub-list",
    url: "/tank-inspection-services",
    belongsTo: "Tanks & Vessel Services",
    body: (
      <div>
        <div className="flex  xl:flex-row md:flex-row flex-col gap-10">
          <div>
            <div className="runtown mx-auto xl:w-3/5 w-full py-10">
              <div className=" py-5">
                <h3 className="font-bold  uppercase">
                  Rehabilitations & Maintenance
                </h3>

                <p>
                  ScafTech Engineering Services delivers world-class Asset
                  Integrity Assurance and Training services throughout the asset
                  lifecycle.
                </p>
              </div>
              <div className=" py-5">
                We serve diverse industries, including Oil & Gas, Marine,
                Construction, and Real Estate. With a highly skilled,
                multi-disciplinary workforce, we provide integrated and
                cost-effective solutions tailored to meet any asset integrity
                challenge.
              </div>

              <div className="py-5">
                Our extensive awards and certifications are a testament to our
                expertise and commitment to excellence. As a leading engineering
                service provider and training center, we continue to set the
                standard in the industry.
              </div>
              <div className="py-5">
                Partner with ScafTech Engineering Services for reliable and
                efficient asset rehabilitation and maintenance solutions.
                Contact us today to learn more.
              </div>
            </div>

            {/* slider here */}
          </div>

          <div>
            <h3> Shutdown Maintenance</h3>
            <SubSectionManager constraint={"Tanks & Vessel Services"} />
          </div>
        </div>
      </div>
    ),
  },
];

export { services_data };
