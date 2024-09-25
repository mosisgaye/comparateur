const Faq = () => {
    const faqs = [
      {
        question: "Quels sont les meilleurs forfaits du moment ?",
        answer:
          "Le prix des abonnements et les promotions évoluent en permanence. Concernant les meilleurs forfaits mobile, ils changent chaque semaine avec des séries limitées incluant plusieurs dizaines de Giga d'internet mobile pour moins de 10€, ou encore des forfaits avec des smartphones pas chers voire même offerts.",
      },
      {
        question: "Comment Ariase aide-t-il les consommateurs à choisir ?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        question: "Quels sont les principaux services proposés par Ariase ?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        question: "Combien d'économies en changeant d'opérateur ?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
      {
        question: "Ariase est-il indépendant et fiable ?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      },
    ];
  
    return (
      <div className="max-w-3xl mx-auto p-6 bg-[#f0f4f7] dark:bg-[#012737] text-[#000] rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#111] dark:text-white mb-6">
          Les réponses à vos questions
        </h2>
        <div className="space-y-4 divide-y divide-white divide-opacity-100">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-gray-300 py-4 cursor-pointer"
              style={{
                borderBottomWidth: 'calc(2px * var(--tw-divide-y-reverse))',
                borderTopWidth: 'calc(2px * (1 - var(--tw-divide-y-reverse)))',
                borderColor: 'rgb(255 255 255 / 1)', // Ajuster la transparence si nécessaire
              }}
            >
              <summary className="text-lg font-medium text-[#111] dark:text-[#fff]">
                {faq.question}
              </summary>
              <div className="transition-max-height max-h-0 overflow-hidden duration-500 ease-in-out group-open:max-h-96">
                <p className="py-2 text-[#111] dark:text-[#fff]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    );
  };
  
  export default Faq;
  