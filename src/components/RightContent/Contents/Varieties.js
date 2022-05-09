function Varieties(){

    return(
        <div className="deneme">
           <div className="type-card">                
                <div>
                    <div className='card-title'>Public Cloud (Genel Bulut): </div>
                    <div className='card-text'>Public Cloud uygulamalarında depolama ve diğer kaynak erişimi hizmet sağlayıcıları tarafından kullanıcılara sunulur. Bu hizmetler ücretsiz veya kullanıma göre fiyatlandırılmaktadır. Genel olarak Microsoft, Google gibi genel bulut sağlayıcıları kendi altyapı kaynaklarını işler ve sadece internet üzerinden erişim sağlanır.</div>
                </div>
            </div>
           <div className="type-card">                
                <div>
                    <div className='card-title'>Private Cloud (Özel Bulut):</div>
                    <div className='card-text'>Private Cloud daha büyük şirketler ve bilgileri daha önemli olan şirketlerin tercih ettiği bir bulut teknolojisi tipidir. Buna örnek olarak Microsoft şirketinin sunduğu Hyper — V ve System Center ürünlerini gösterebiliriz. Private Cloud kişisel kurduğumuz yapı olduğu için tüm bilgiler bizim elimizin altındadır. Örnek olarak devlet kuruluşları bilgi işlem ihtiyaçlarını ortak kurulan bir bulut kullanarak sağlayabilirler. Yada uluslararası bir şirket tüm dünya ülkelerinde olan şubelerinin bilgi işlem ihtiyaçlarını tek bir bulut üzerinden sürdürebilmektedir.</div>
                </div>
            </div>
           <div className="type-card">                
                <div>
                    <div className='card-title'>Hybrid Cloud (Melez Bulut):</div>
                    <div className='card-text'>Hybrid Cloud Public ve Private Cloud’un birleşiminden ortaya çıkan yapılardır. Güvenlik ve gizliliğin daha önemli olduğu ve tedbirin yüksek tutulması gereken yerlerde Private Cloud teknolojisi kullanılır, ancak yukarıdaki güvenlik tedbirlerinin daha düşük düzeyde tutulabileceği alanlarda Public Cloud kullanmak daha mantıklıdır. Bunların birleşmesi de şirketlerin hacmine göre değişiyor.</div>
                </div>
            </div>
        </div>
    )
}

export default Varieties;