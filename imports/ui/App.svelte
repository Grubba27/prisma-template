<script>
  
  import { onMount } from "svelte";
  
  let name, email, list = [];
  
  function submit() {
    Meteor.call('insertMessage', name, email, refresh);
    email = '';
  }
  
  function refresh() {
    Meteor.call('getMessages', (_, value) => list = value);
  }
  
  onMount(() => {
    refresh();
  });

</script>


<div class="container">
  <h2>Using Prisma</h2>
  
  <form on:submit|preventDefault={submit}>
    <label>
      Email
    </label>
    <input type="email" required bind:value={email}/>
    <label>
      Nome
    </label>
    <input type="text" required bind:value={name}/>
    <button type="submit">
      Enviar
    </button>
  </form>
  <button on:click={refresh}>
    Refresh
  </button>
  
  {#each list as item}
    <ul>
      <li>
        {item.name} usa o email: {item.email}
      </li>
    </ul>
  {/each}


</div>
