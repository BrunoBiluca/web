import classNames from 'helpers/ClassNames'
import style from './GamePage.module.css'
import ActionButton from 'AppV2/Components/Buttons/ActionButton'

export default function GamePage() {
  console.log(style.downloadAction)
  return <>
    {/* Info */}
    <div className={classNames(style.block, style.twoColumnSection)}>
      <div className={classNames(style.gallery, style.section)}>
        {/* Gallery */}
      </div>
      <div className={classNames(style.section)}>
        {/* Info */}
        <div className={classNames(style.gameHeader)}>
          <h1>Nome do Jogo</h1>
          <span>Lançamento: 13/09/1992</span>
        </div>
        <div>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
          </p>
          <p>
            Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Interagi no mé, cursus quis, vehicula ac nisi.
          </p>
        </div>
      </div>
    </div>

    <div className={classNames(style.twoColumnSection)}>
      {/* Download */}
      <div className={classNames(style.block, style.section, style.gameDownload)}>
        <div className={classNames(style.twoColumnSection)} style={{ alignItems: "center" }}>
          <h1>Jogar Nome do jogo</h1>
          <div>
            <span>Plataforma 1</span>
            <span>Plataforma 2</span>
          </div>
        </div>
        <div className={classNames(style.downloadActions)}>
          <ActionButton label="Download" className={[style.downloadAction]} />
          <ActionButton label="Download" className={[style.downloadAction]} />
          <ActionButton label="Download" className={[style.downloadAction]} />
        </div>
      </div>
      <div className={classNames(style.block, style.gameInfoSecondary)}>
        <div className={classNames(style.section)}>
          <p><strong>Desenvolvedor:</strong> Biluca Games</p>
          <p><strong>Lançamento:</strong> 13/09/1992</p>
          <p><strong>Tamanho:</strong> 1.23 GB</p>
        </div>
        <div className={classNames(style.section)}>
          <h3>Categorias/Gênero</h3>
          <div className={style.categories}>
            <span className={classNames(style.category)}>⚒️ Cooperação</span>
            <span className={classNames(style.category)}>⚒️ Cooperação</span>
            <span className={classNames(style.category)}>⚒️ Cooperação</span>
            <span className={classNames(style.category)}>⚒️ Cooperação</span>
            <span className={classNames(style.category)}>⚒️ Cooperação</span>
          </div>
        </div>
      </div>
    </div >

    <div className={classNames(style.block, style.section)}>
      <h2>Sobre esse jogo</h2>
      <div>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
        </p>
      </div>
    </div>
    {/* Secondary info */}
    {/* Description */}
    {/* Repositório de código */}
    <div className={classNames(style.block, style.section)}>
      <h2>Repositório de código</h2>
    </div>
  </>
}