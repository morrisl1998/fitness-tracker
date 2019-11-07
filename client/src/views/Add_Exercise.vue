<template>
<section class = "search">
    <h1>Add Your Exercise</h1>
    <form v-on:submit.prevent="onSubmit">

        <div class = "form-group">
            <label for="exercise_type">Type of Exercise</label>
            <select name="platform" id="platform" v-model="platform">
                <option value="swimming">Swimming</option>
                <option value="biking">Biking</option>
                <option value="running">Running</option>
            </select>
        </div>

        <div class = "form-group">
            <label for="duration">How far did you go?</label>
            <input type="text" v-model="duration" id="duration" placeholder="miles, feet, etc...">
        </div>

        <div class = "form-group">
            <label for="duration">How long did you go?</label>
            <input type="text" v-model="gamertag" id="gamertag" placeholder="Seconds, minutes, etc...">
        </div>

        <div class = "form-group">
            <input type="submit" value="Submit" class="btn">
        </div>

    </form>
</section>
</template>