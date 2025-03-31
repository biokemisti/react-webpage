import '../styles/components/Services.css';

function Services() {
    return (
        <section id="services" className="services">
            <h2>Palvelut</h2>
            <div className="services-list">
                <div className="service-item">
                <div className="service-icon">🐞</div>
                    <h3>Debuggaus</h3>
                    <p>Ohjelmiston odottamaton käytös, virheilmoitukset tai kaatumiset voivat johtua monista syistä 
                        – loogisista virheistä, synkronointiongelmista, muistin hallinnan puutteista tai suorituskykyongelmista.
                         Me analysoimme järjestelmäsi toimintaa syvällisesti etsien
                          virheiden juurisyyt sen sijaan, että vain paikkaisimme seurauksia. 
                    </p>
                </div>
                <div className="service-item">
                    <div className="service-icon">🔧</div>
                    <h3>Refaktorointi</h3>
                    <p>Rakenteellisesti epäoptimaalinen koodi muutetaan modulaarisemmaksi, 
                        selkeämmäksi ja ylläpidettävämmäksi ilman, että järjestelmän ulkoinen 
                        toiminnallisuus muuttuu. Sovellamme suunnittelumalleja, parannamme koodin 
                        eriyttämistä ja minimoimme teknistä velkaa säilyttäen yhteensopivuuden nykyisten 
                        rajapintojen kanssa.
                    </p>
                </div>
                <div className="service-item">
                    <div className="service-icon">⚡</div>
                    <h3>Optimointi</h3>
                    <p>Parannamme ohjelmiston suorituskykyä ja skaalautuvuutta valitsemalla oikeat tietorakenteet, 
                        algoritmit ja teknologiat. Analysoimme pullonkauloja, vähennämme turhia resurssikutsuja 
                        ja kehitämme järjestelmän tehokkuutta.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
