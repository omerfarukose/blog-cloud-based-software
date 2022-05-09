
function ServiceTypes(){

    return(
        <div className="deneme">
           <div className="type-card">
                <img className="card-icon" src={require('../../../assets/iaas-icon.png')}/>
                <div>
                    <div className='card-title'>Hizmet Olarak Altyapı (IaaS)</div>
                    <div className='card-text'>IaaS, bulut BT için temel yapı taşlarını içerir. Genellikle ağ iletişimi, bilgisayarlar (sanal veya tahsis edilmiş donanım üzerinde) ve veri depolama alanına erişim sağlar. IaaS, BT kaynaklarınız üzerinde en yüksek esneklik ve yönetim denetimi seviyesini sunar. Bu, birçok BT departmanının ve geliştiricinin aşina olduğu mevcut BT kaynaklarına benzer. </div>
                </div>
            </div>
            <div className="type-card">
                <div>
                    <div className='card-title'>Hizmet Olarak Platform (PaaS)</div>
                    <div className='card-text'>PaaS, altyapı (genelde donanım ve işletim sistemleri) yönetimi ihtiyacınızı ortadan kaldırarak uygulama dağıtma ve yönetim alanlarına odaklanmanızı sağlar. Bu da kaynak tedariki, kapasite planlaması, yazılım bakımı, düzeltme ekleri veya uygulamanızın çalıştırılmasıyla ilgili diğer benzer zorlu görevler konusunda endişelenmemenize ve bu sayede daha verimli bir şekilde çalışmanıza yardımcı olur. </div>
                </div>
                <img className="card-icon" src={require('../../../assets/paas-icon.png')}/>
            </div>
            <div className="type-card">
                <img className="card-icon" src={require('../../../assets/saas-icon.png')}/>
                <div>
                    <div className='card-title'>Hizmet Olarak Yazılım (SaaS)</div>
                    <div className='card-text'>SaaS, hizmet sağlayıcısı tarafından çalıştırılan ve yönetilen tamamlanmış bir ürün sunar. SaaS, çoğu zaman son kullanıcı uygulamalarını (web tabanlı e-posta gibi) ifade etmek için kullanılır. SaaS teklifiyle, hizmetin bakımı veya altyapının yönetimi konusunda endişelenmeniz gerekmez. Düşünmeniz gereken tek şey bu yazılımı nasıl kullanacağınızdır. </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTypes;