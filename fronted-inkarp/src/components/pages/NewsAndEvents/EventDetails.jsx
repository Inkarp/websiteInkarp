import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    title: "Analytical Validation of an Immunofluorescence Assay",
    date: "2025-05-06",
    location: "Online Webinar",
    image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
    sections: [
      {
        heading: "Introduction",
        content: `In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy has gained significant traction. These advancements offer real-time insights into tumor heterogeneity, therapy resistance, and potential biomarker identification in various cancers, particularly prostate cancer.`
      },
      {
        heading: "Study Background",
        content: `CTCs represent a valuable diagnostic resource by enabling blood sample analysis for assessing drug target expression and disease progression without invasive procedures. This study aimed to validate a robust immunofluorescence-based assay to detect and quantify ARv7 expression using the RareCyte Platform.`
      },
      {
        heading: "Methods",
        content: `Samples were spiked with 22RV1, LNCAP, and BT-474 cells. RarePlex ARv7 CTC Panel Kit was used with nuclear dye, anti-CD45, EpCAM, cytokeratin, and ARv7 antibody. Slides were imaged via CyteFinder and analyzed by CyteMapper.`
      },
      {
        heading: "Results",
        content: `ARv7 assay showed 83% sensitivity for 22RV1 and 98% specificity for BT-474. Overall accuracy: 90%. MFI cutoff was set at 100. Assay matched or exceeded standard recovery.`
      },
      {
        heading: "Conclusion",
        content: `The ARv7 assay is sensitive, specific, and reproducible for CTC-based detection. It holds promise for therapeutic guidance and is compatible with multiplexing via RarePlex 488 Developer Kit.`
      }
    ]
  },
  {
    id: 2,
    title: "Green Chemistry Expo",
    date: "2025-05-15",
    location: "Nehru Centre, Mumbai",
    image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
    description: "Exploring sustainable practices in modern chemical research, this expo brings together the best of green chemistry innovations and their implementation across pharmaceutical and industrial sectors.",
      sections: [
      {
        heading: "Introduction",
        content: `In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy has gained significant traction. These advancements offer real-time insights into tumor heterogeneity, therapy resistance, and potential biomarker identification in various cancers, particularly prostate cancer.`
      },
      {
        heading: "Study Background",
        content: `CTCs represent a valuable diagnostic resource by enabling blood sample analysis for assessing drug target expression and disease progression without invasive procedures. This study aimed to validate a robust immunofluorescence-based assay to detect and quantify ARv7 expression using the RareCyte Platform.`
      },
      {
        heading: "Methods",
        content: `Samples were spiked with 22RV1, LNCAP, and BT-474 cells. RarePlex ARv7 CTC Panel Kit was used with nuclear dye, anti-CD45, EpCAM, cytokeratin, and ARv7 antibody. Slides were imaged via CyteFinder and analyzed by CyteMapper.`
      },
      {
        heading: "Results",
        content: `ARv7 assay showed 83% sensitivity for 22RV1 and 98% specificity for BT-474. Overall accuracy: 90%. MFI cutoff was set at 100. Assay matched or exceeded standard recovery.`
      },
      {
        heading: "Conclusion",
        content: `The ARv7 assay is sensitive, specific, and reproducible for CTC-based detection. It holds promise for therapeutic guidance and is compatible with multiplexing via RarePlex 488 Developer Kit.`
      }
    ]
  },
  {
    id: 3,
    title: "Nanotech Conference",
    date: "2025-05-20",
    location: "IIT Delhi",
    image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
    description: "Innovations in nanotechnology for medical and material science applications. Learn from leading scientists and startups showcasing real-world applications.",
      sections: [
      {
        heading: "Introduction",
        content: `In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy has gained significant traction. These advancements offer real-time insights into tumor heterogeneity, therapy resistance, and potential biomarker identification in various cancers, particularly prostate cancer.`
      },
      {
        heading: "Study Background",
        content: `CTCs represent a valuable diagnostic resource by enabling blood sample analysis for assessing drug target expression and disease progression without invasive procedures. This study aimed to validate a robust immunofluorescence-based assay to detect and quantify ARv7 expression using the RareCyte Platform.`
      },
      {
        heading: "Methods",
        content: `Samples were spiked with 22RV1, LNCAP, and BT-474 cells. RarePlex ARv7 CTC Panel Kit was used with nuclear dye, anti-CD45, EpCAM, cytokeratin, and ARv7 antibody. Slides were imaged via CyteFinder and analyzed by CyteMapper.`
      },
      {
        heading: "Results",
        content: `ARv7 assay showed 83% sensitivity for 22RV1 and 98% specificity for BT-474. Overall accuracy: 90%. MFI cutoff was set at 100. Assay matched or exceeded standard recovery.`
      },
      {
        heading: "Conclusion",
        content: `The ARv7 assay is sensitive, specific, and reproducible for CTC-based detection. It holds promise for therapeutic guidance and is compatible with multiplexing via RarePlex 488 Developer Kit.`
      }
    ]
  }
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = cardData.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="text-center p-10 text-red-600">Event not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600 hover:underline">← Back</button>
      <img src={event.image} alt={event.title} className="w-full h-72 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{event.title}</h1>
      <p className="text-sm text-gray-500 mb-1">📅 {new Date(event.date).toDateString()}</p>
      <p className="text-sm text-gray-500 mb-4">📍 {event.location}</p>

      {event.sections ? (
        event.sections.map((sec, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{sec.heading}</h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{sec.content}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">{event.description}</p>
      )}
    </div>
  );
};

export default EventDetails;
