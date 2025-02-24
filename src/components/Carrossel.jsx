// import '../../public/assets/css/carrossel.css';
import ImgPratoPrincipal from '../../public/assets/images_carrossel/prato_principal.jpg';
import ImgSobremesa from '../../public/assets/images_carrossel/sobremesa.jpg';
import ImgBebida from '../../public/assets/images_carrossel/bebida.jpg';

export default function Carrossel(){
    return(
        <div className="carrossel position-relative z-0">
            {/* Carrossel de imagens - um slider */}
            <div id="carrossel-de-imagens" class="carrossel carousel slide" data-bs-ride="carousel">

                {/* traços marcadores */}
                <div class="carousel-indicators">
                    {/* primeiro marcador (ativo por padrão) */}
                    <button type="button" class="active" data-bs-target="#carrossel-de-imagens" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>

                    {/* segundo marcador: link imagem 2 */}
                    <button type="button" data-bs-target="#carrossel-de-imagens" data-bs-slide-to="1" aria-label="Slide 2"></button>

                    {/* terceiro marcador: link imagem 3 */}
                    <button type="button" data-bs-target="#carrossel-de-imagens" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Bloco de imagens */}
                <div class="carousel-inner">

                    {/* imagem 1 + legenda */}
                    <div class="carousel-item active">
                        {/* imagem 1 */}
                        <img src={ImgPratoPrincipal} alt="Gintoki"/>

                        {/* legenda */}
                        <div class="carousel-caption">
                            <i class="fa-solid fa-bowl-food"></i>
                            <p>Coma o bom e o melhor em nossa casa.</p>
                        </div>
                    </div>

                    {/* imagem 2 + legenda */}
                    <div class="carousel-item">
                        {/* imagem 2 */}
                        <img src={ImgSobremesa} alt="Shimpachi"/>

                        {/* legenda */}
                        <div class="carousel-caption">
                            <i class="fa-solid fa-ice-cream"></i>
                            <p>Saboreie maravilhosas sobremesas.</p>
                        </div>
                    </div>

                    {/* imagem 3 + legenda */}
                    <div class="carousel-item">
                        {/* imagem 3 */}
                        <img src={ImgBebida} alt="Kagura"/>

                        {/* legenda */}
                        <div class="carousel-caption">
                            <i class="fa-solid fa-mug-saucer"></i>
                            <p>Refresque o dia com nossas bebidas.</p>
                        </div>
                    </div>
                </div>
                {/* /fim bloco de imagens */}

                {/* Botões de navegação */}
                <button type="button" class="carousel-control-prev" data-bs-target="#carrossel-de-imagens" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>

                <button type="button" class="carousel-control-next" data-bs-target="#carrossel-de-imagens" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
            </div>
        </div>
    )
}