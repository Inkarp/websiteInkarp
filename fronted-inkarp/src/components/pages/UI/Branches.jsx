const branches = [
    {
      city: "BENGALURU",
      address:
        "69, 1st Cross Mico Layout, Mahalaxmi Puram, Bengaluru – 560086. Karnataka.",
      salesPhone: "7338186776",
      servicePhone: "7338186774",
      emails: ["salesbglr@inkarp.co.in", "servicebglr@inkarp.co.in"],
    },
    {
      city: "MUMBAI",
      servicePhone: "9281014851",
      emails: ["salesmumbai@inkarp.co.in", "supportmumbai@inkarp.co.in"],
    },
    {
      city: "DELHI",
      address:
        "4FCS-52 TO 55, Corporate Suites, Ansal Plaza, Sector-1, Vaishali, Ghaziabad – 201010. Uttar Pradesh.",
      salesPhone: ["7042194732", "7042066011"],
      servicePhone: "7042194720",
      emails: ["salesdelhi@inkarp.co.in", "servicedelhi@inkarp.co.in"],
    },
    {
      city: "VISAKHAPATNAM",
      address:
        "Flat No: 501, 4th Floor, Ayyappa Nilayam, Sheelanagar, Visakhapatnam – 530012. Andhra Pradesh.",
      salesPhone: "7331146992",
      servicePhone: "7331146991",
      emails: ["salesvizag@inkarp.co.in", "servicevizag@inkarp.co.in"],
    },
    {
      city: "PUNE",
      address:
        "Office No. 511, Fifth Floor, West Avenue, Bremen Chowk, Opposite PMRDA, Aundh, Pune – 411007. Maharashtra.",
      salesPhone: "7780412649",
      servicePhone: "9281014852",
      emails: ["salespune@inkarp.co.in", "servicepune@inkarp.co.in"],
    },
    {
      city: "CHANDIGARH",
      address:
        "House No. 8, 1st Floor, Phase XI, SAS Nagar, Mohali – 160062. Chandigarh.",
      salesPhone: "7042191973",
      servicePhone: "7042194720",
      emails: ["saleschd@inkarp.co.in"],
    },
  ];
  

  function Branches() {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-indigo-600 mb-4">
                  {branch.city}
                </h3>
                {branch.address && (
                  <p className="text-gray-700 text-sm mb-3">{branch.address}</p>
                )}
                {branch.salesPhone && (
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">Sales:</span>{" "}
                    {Array.isArray(branch.salesPhone)
                      ? branch.salesPhone.join(" / ")
                      : branch.salesPhone}
                  </p>
                )}
                {branch.servicePhone && (
                  <p className="text-sm text-gray-800 mb-2">
                    <span className="font-semibold">Service:</span>{" "}
                    {branch.servicePhone}
                  </p>
                )}
                {branch.emails?.length > 0 && (
                  <div className="mt-2">
                    {branch.emails.map((email, idx) => (
                      <p key={idx}>
                        <a
                          href={`mailto:${email}`}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Branches;
  