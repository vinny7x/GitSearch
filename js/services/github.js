export async function search(user) {
    const data = await fetch(`https://api.github.com/users/${user}`);
    const res = await data.json();
    return res;
}