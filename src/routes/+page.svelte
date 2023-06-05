<script>
    import "../app.css";
    import Nav from "../components/Nav.svelte";
</script>

<main class='h-screen'>
    <Nav/>
    <p class='text-light text-sans text-4xl text-center sm: p-20 pb-10'>Welcome!</p>
    <div class='flex flex-row px-20 justify-evenly'>
        <img class='h-80 w-60' alt='me' src='/chicago picture.png'/>
        <p class='text-light text-sans text-2xl text-left w-60'>My name is Jamie and I'm a Computer Science major at UIUC</p>
    </div>
</main>
