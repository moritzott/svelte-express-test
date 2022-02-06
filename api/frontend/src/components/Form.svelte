<script>
    let firstname = "";
    let lastname = "";
    let email = "";

    const submitForm = async () => {
        // API call:
        const response = await fetch(`http://localhost:3000/users/${firstname}/${lastname}/${email}`);
        const formattedResponse = await response.json();
        console.log(formattedResponse);
        firstname = "";
        lastname = "";
        email= "";

    };
</script>

<div class="container" style="width: 320px;">
    <form action="#" method="get" class="box">
        <div class="mb-3">
            <label for="firstname">Vorname</label>
            <input bind:value="{firstname}" class="input" type="text" name="firstname" id="firstname" required>
        </div>
        
        <div class="mb-3">
            <label for="lastname">Nachname</label>
            <input bind:value="{lastname}" type="tel" name="lastname" id="lastname" class="input" required>
        </div>
        
        <div class="mb-3">
            <label for="email">Email:</label>
            <input bind:value="{email}" type="email" name="email" id="email" class="input" required>
        </div>

        <div class="mb-3 mt-5 level">
            <div class="level-left">
                <a href="localhost:8080" class="button is-danger">Abbrechen</a>
            </div>
            <div class="level-right">
                <input on:click|preventDefault={submitForm} type="submit" value="Anmelden" class="button is-primary">
            </div>
            
        </div>

    </form>
</div>
