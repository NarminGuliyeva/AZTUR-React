import React from 'react'

function About() {
  return (
    <section className='section-about'>
        <div className='txt-about'>
            <p>Aztur Travel “2014-cü ildən bəri turizm istiqamətləri üzrə müştərilərə xidmət göstərir, Mənzil-qərargahı Monrealda (Kanada) yerləşən Beynəlxalq Hava Nəqliyyatı Assosiasiyasının (IATA) akkreditasiyasından keçmiş turizm şirkətidir”.</p>
            <p>Müştərilərinin istəklərinə uyğun olaraq şirkət aşağıdakı xidmətləri təklif edir:</p>
            <ul>
                <li>İşgüzar səfərlərin idarə edilməsi;</li>
                <li>Viza xidmətləri (viza dəstəyi, elektron vizaların verilməsi);</li>
                <li>İstənlən istiqamətlərə aviabiletlərin satışı;</li>
                <li>Turların təşkil edilməsi;</li>
                <li>Dünyanıın müxtəlif şəhərlərində otel rezervasiyası;</li>
                <li>Unikal tur və ekskursiyalar.</li>
            </ul>
            <p>Konsyerj xidmətləri:</p>
            <ol>
                <li>Kruizlər;</li>
                <li>Səyahət sığortası, icbari sığorta;;</li>
                <li>Qonaqların qarşılanması və VİP xidmət;;</li>
                <li>Yerli və xarici sanatoriyalara və sağlamlıq mərkəzlərinə müalicə turları.;</li>
            </ol>
        </div>
        <div className='img-about special-offer'>
            <div className='txt-img-about'>
                <div className='part-txt-img-about'>
                    <h3>10</h3>
                    <p>Fəaliyyət ili</p>
                </div>
                <div className='part-txt-img-about'>
                    <h3>121</h3>
                    <p>Milli mükafatlar</p>
                </div>
                <div className='part-txt-img-about'>
                    <h3>556</h3>
                    <p>Peşəkar xidmət</p>
                </div>
                <div className='part-txt-img-about'>
                    <h3>700+</h3>
                    <p>Hotellər</p>
                </div>
                <div className='part-txt-img-about'>
                    <h3>540+</h3>
                    <p>İllik satış</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
