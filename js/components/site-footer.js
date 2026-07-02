class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-slate-900 text-white py-8">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-8">

            <div class="flex-1">
                <h2 class="text-xl font-bold">GitSearch</h2>

                <p class="text-slate-300 mt-2">
                    Encontre perfis do GitHub de forma rápida e prática.
                </p>

                <p class="text-slate-400 text-sm mt-4">
                    Desenvolvido utilizando HTML, Tailwind CSS, JavaScript e a GitHub API.
                </p>
            </div>

            <div class="flex-1">
                <h2 class="text-xl font-bold">Links</h2>

                <ul class="mt-3 space-y-2">
                    <li>
                        <a class="hover:text-sky-400 transition" href="index.html">
                            Início
                        </a>
                    </li>

                    <li>
                        <a class="hover:text-sky-400 transition" href="about.html">
                            Sobre
                        </a>
                    </li>

                    <li>
                        <a class="hover:text-sky-400 transition" href="#name">
                            Contato
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex-1" id="contato">
                <h2 class="text-xl font-bold">Contato</h2>

                <p class="text-slate-300 mt-2 mb-4">
                    Tem alguma dúvida ou sugestão? Envie uma mensagem.
                </p>

                <form class="flex flex-col gap-3">
                    <input required type="text" id="name" placeholder="Seu nome"
                        class="rounded-md bg-sky-100 text-slate-700 p-2">

                    <input required type="email" id="email" placeholder="Seu e-mail"
                        class="rounded-md bg-sky-100 text-slate-700 p-2">

                    <textarea required id="message" placeholder="Sua mensagem"
                        class="rounded-md bg-sky-100 text-slate-700 p-2 h-24 resize-none"></textarea>

                    <button type="submit"
                        class="bg-sky-500 hover:bg-sky-600 text-white rounded-md p-2 transition cursor-pointer">
                        Enviar
                    </button>
                </form>
            </div>

        </div>

        <div class="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
            © 2026 GitSearch • Projeto acadêmico desenvolvido com 💙 por <a
                href="https://github.com/vinny7x">Vinny7x</a>.
        </div>
    </footer>
    `;
  }
}
customElements.define('site-footer', footer);