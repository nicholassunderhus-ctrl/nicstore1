import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a entrega dos produtos?",
    answer: "Após a confirmação do pagamento, você receberá os dados de acesso ou itens diretamente no seu e-mail cadastrado e também poderá acessar na área do cliente. A maioria das entregas é feita em menos de 5 minutos!",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos PIX (entrega instantânea), cartões de crédito e débito, boleto bancário, e pagamentos via Mercado Pago. O PIX é a opção mais rápida para receber seu produto.",
  },
  {
    question: "Os produtos são originais e seguros?",
    answer: "Sim! Todos os nossos produtos são 100% originais e verificados. Trabalhamos apenas com fornecedores confiáveis e oferecemos garantia de 30 dias em todas as compras.",
  },
  {
    question: "E se eu tiver algum problema com minha compra?",
    answer: "Nossa equipe de suporte está disponível 24 horas por dia no Discord e WhatsApp. Qualquer problema será resolvido rapidamente com total suporte ao cliente.",
  },
  {
    question: "Posso pedir reembolso?",
    answer: "Sim! Se houver qualquer problema com seu produto que não possamos resolver, oferecemos reembolso integral em até 7 dias após a compra. Sua satisfação é nossa prioridade.",
  },
  {
    question: "Como participar dos sorteios diários?",
    answer: "Basta entrar no nosso servidor do Discord e seguir as instruções no canal de sorteios. Todo dia sorteamos itens, contas e outros produtos para a comunidade!",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border border-border px-6 rounded-xl data-[state=open]:border-primary/50 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
