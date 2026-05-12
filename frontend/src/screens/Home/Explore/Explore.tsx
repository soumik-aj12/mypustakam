const Explore = () => {
  return (
    <section className="py-stack-lg">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md text-center">
        Explore by Theme
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-150 md:h-125">
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
          <img
            alt="Fiction"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
            data-alt="A lush, cinematic shot of a classic home library with floor-to-ceiling wooden bookshelves filled with leather-bound books. Soft, warm light glows from a brass floor lamp. The mood is cozy and timeless, evoking the feeling of getting lost in a great work of fiction. The color palette consists of deep mahogany, warm ambers, and soft creams."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOEER0E3Ulh2f4ElJ8HdqVeFS8yZ0AZEHsa_q0rbwsTOuISwtJ_AzH5pwgkQ0h0H0M-OvCrzFA6qrMNrIjf3gGQozJbOHYcUIOgS8LcZBVU2Z_Ydt9YX-r99eI2_SQZecpr11xkxQc18a4j35Kb6VIc5Ji_7gPI5zSClN8NzbgAMnnhDTq5klAvCguD0Sr97vkqx64GFgAmt_BrWSiuJwUWt5PIIxS1AzCRZ6neCgO4LeBjuzR0o47wHsoDapR-Qpdzpg0U48MHCyd"
          />
          <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-stack-md text-on-secondary">
            <h3 className="font-headline-lg text-headline-lg mb-1">Fiction</h3>
            <p className="font-body-md text-body-md opacity-80">
              Journey to worlds unknown.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-secondary-container/30 rounded-full text-label-sm font-label-sm backdrop-blur-md">
                Novels
              </span>
              <span className="px-3 py-1 bg-secondary-container/30 rounded-full text-label-sm font-label-sm backdrop-blur-md">
                Poetry
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
          <img
            alt="Philosophy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            data-alt="A minimalist composition of an open book with blank pages resting on a stone surface. Beside it, a single dried flower. The lighting is stark and intellectual, casting long, soft shadows. The overall aesthetic is one of quiet contemplation and philosophical depth, using a palette of grey, white, and warm sun-faded orange."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBno1PnnNHKlozb4Jy4lFdIdUqe5bg7ttw6nLF_5_eBvRbcnDK8HORfUU0MKwp8_MwUM-60UKiJtjdUAi4JxsqP09_MBr2e8sHRmInx6fLyRGZdXrXEsVMkQCJilZJQOFIu8oaVX7SriMcPZO_cjDKQQg0SlO1gdufRhK4kHeuCWmAk8_l2F8Qte0dVZLadgKAjuheWkaeRgTo4SWqdqHo4MhSeBROmRXzzgY4zclQQORlfFsdYjZhDDIn-T9Xe7r7zs6TfHomDcOlR"
          />
          <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-stack-md text-on-secondary">
            <h3 className="font-headline-md text-headline-md mb-1">
              Philosophy
            </h3>
            <p className="font-body-md text-body-md opacity-80">
              Questions that shape the soul.
            </p>
          </div>
        </div>
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
          <img
            alt="Art"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            data-alt="A vibrant and abstract close-up of thick oil paint textures in shades of orange, cream, and deep charcoal. The lighting is professional and bright, showing the physical depth of the brushstrokes. It evokes the creative and tactile nature of art books. The style is modern and high-end, fitting the minimalist brand of the bookstore."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi5ERhVuX5VXt11_5c25MOxxu_eueyMPAZ6TOftYiWksRsRKDNE8E-zGRS5I9-hPmLqVh4k9phqUtSGyo9K78sVZFQKzilXCdE3wmT6TYu4bNdTl8GJyG3JcXWeXAmQX1hpjkdCq3BfzDjZEx0cyPYAQVPxTr07IQCVBxTmWWeaOrcUlINxXK0wH7UO1gKqBhPlj0K3W9OWIJqtwQZO3cNQBHiD3BxbuxPa8DCSGLxAuP6KV8x0bFWEwWfd-SjBes08M1Jbp2SVIG0"
          />
          <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-on-secondary">
            <h3 className="font-headline-md text-headline-md">Art</h3>
          </div>
        </div>
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
          <img
            alt="History"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            data-alt="An atmospheric shot of an antique brass compass resting on a stack of old, yellowed maps. The lighting is warm and sun-drenched, like a late afternoon in a study. It conveys a sense of history, discovery, and the passage of time. The color palette is rich with golds, browns, and warm creams."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt0u6oK_T-RegMAq4116RjW_01x6bknFkWuXZ1EQrya8loPotFIfnJGqFeVrlrJOZ1UMSMa7rOJFaW5hAf6Nmj58_lADSkPUW56VNuK2Rp6bWzDHu7ZMjUs-THrcm4kmgmRxkK5cBp07NwL5-oB0M2SFx1bFTArQ7DGgLe7chgubs33bdXs_azECBorNLwhRhCxwGSzRtYyez-BIw6LW6VAi0HLp0HrjW5ytgE8yj0RQrq_4cnkD5VQ3_L0LjJ40CqEtUoMA7iF-1e"
          />
          <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-on-secondary">
            <h3 className="font-headline-md text-headline-md">History</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
