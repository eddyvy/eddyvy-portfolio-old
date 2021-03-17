
<div class="Contact">
    <figure class="Contact-figure"/>
    <div class="Contact-data">
        <h3>Eduard Valls Yue</h3>
        <h5>
            Aerospace Engineer
            <br>Pilot
            <br>Computer Science Student
        </h5>
        <h6>edwardyue93@gmail.com</h6>
    </div>
</div>

<style>
    .Contact {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .Contact-figure {
        height: 12rem;
        width: 12rem;
        border-radius: 10rem;
        background-image: url("https://i.imgur.com/iTyv47a.jpg");
        background-size: cover;
        background-position: center;
    }
    .Contact-data h3, h4, h5{
        padding: 0;
        margin: 0.8rem;
    }
    @media (max-width: 850px) {
        .Contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .Contact-figure {
            height: 10rem;
            width: 10rem;
        }
    }

</style>