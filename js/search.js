import { search } from "./services/github.js";

const form = document.querySelector('#search-form');

const profile = document.querySelector("#profile");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = document.querySelector("#user").value;

    const data = await search(user);

    if (data.message === "Not Found") {
        profile.innerHTML = "<p>Usuário não encontrado.</p>";
        return;
    }
    if (data?.message?.startsWith("API rate limit exceeded")) {
        profile.innerHTML = "<p>Calma aí 😅 muitas buscas em sequência. Aguarde um momento e tente novamente.</p>";
        return;
    }

    profile.innerHTML = `
                 <div
                class="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-16 shadow-xl mx-4 w-full max-w-2xl flex flex-col md:flex-row gap-6 m-4">
                <div class="flex flex-col items-center">

                    <img class="rounded-full w-24 md:w-32" src="${data.avatar_url}" alt="${data.login}">
                    <p><strong>@</strong>${data.login}</p>
                    <h2>${data.name}</h2>
                    <p class="break-words">${data.bio ?? "Sem biografia."}</p>
                </div>
                <div class="text-start">
                    <p>👥 Seguidores: <strong>${data.followers}</strong></p>
                    <p>➡️ Seguindo: <strong>${data.following}</strong></p>
                    <p>📦 Repositórios: <strong>${data.public_repos}</strong></p>
                    <p>📍 Localização: <strong>${data.location ?? "Não informada"}</strong></p>
                    <p>🏢 Empresa: <strong>${data.company ?? "Não informada"}</strong></p>
                    <p>🌐 Site: <strong>${data.blog || "Não informado"}</strong></p>
                    <p>📅 Entrou em: <strong>${new Date(data.created_at).toLocaleDateString("pt-BR")}</strong></p>
                    <a class="w-full flex justify-center mt-4 p-2 bg-orange-500 hover:bg-orange-400 transition rounded-md cursor-pointer text-white"
                        href="${data.html_url}" target="_blank">
                        Ver perfil
                    </a>
                </div>

            </div>
    `;
});