const certificates = [
  {
    title: "Web Developer Internship Certificate",
    issuer: "KGE Technologies Pvt Ltd , Chennai",
    image: "/intershipCertificate.png",
    pdf: "/intershipCertificate.pdf",
  },
  {
    title: "Full Stack Web Development – Delta Program",
    issuer: "Apna College",
    image: "/FullStack.png",
    pdf: "/FullStack.pdf"
  },
  {
    title: "ICPC Chennai Multi Provincial Contest 2025",
    issuer: "International Collegiate Programming Contest",
    image: "/IcpcAll.png",
    pdf: "/IcpcAll.pdf",
  },
  {
    title: "ICPC Contest – 16th Place",
    issuer: "International Collegiate Programming Contest",
    image: "/IcpcBanti.png",
    pdf: "/IcpcBanti.pdf",
  },
  
  {
    title: "Data Structures & Algorithms with Java – Alpha Program",
    issuer: "Apna College",
    image: "/JavaDSA.png",
    pdf: "/JavaDSA.pdf"
  },
  
];

const Certificate = () => {
  return (
    <div id="certificate" className="min-h-screen pt-24 px-10">
      <h1 className="text-4xl font-bold mb-10 text-center">My Certificates</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-5 shadow-lg hover:scale-105 transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p className="text-gray-400">{cert.issuer}</p>

            {cert.pdf && (
              <a
                href={cert.pdf}
                target="_blank"
                className="text-blue-400 underline"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
