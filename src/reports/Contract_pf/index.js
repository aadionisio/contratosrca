import React from "react";

import {
  Container,
  Topic,
  Title,
  ContentTopic,
  ListOrder,
  DateDocument,
} from "./styles";

function Contract_pf() {
  function datePerExtension() {
    const data = new Date();

    var day = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ][data.getDay()];
    var date = data.getDate();
    var month = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ][data.getMonth()];
    var year = data.getFullYear();

    // console.log(data);
    // console.log(`Parnaiba, ${date} de ${month} de ${year}`);
    return `Parnaiba, ${date} de ${month} de ${year}`;
  }

  return (
    <Container>
      <Title> CONTRATO DE REPRESENTAÇÃO COMERCIAL – PESSOA FISICA </Title>
      <ContentTopic>
        Pelo presente instrumento particular de contrato de representação
        comercial que entre si celebram, de um lado Sr. PAULO ROBERTO DO
        NASCIMENTO RODRIGUES CRUZ CPF 375.040.293-00, RG 1237391, residente e
        domiciliado na AVENIDA DAS NORMALISTAS, 2067, Bairro NOVA PARNAIBA,
        Cidade de PARNAIBA, Estado do PIAUÍ,
        <strong>SIMPLESMENTE DORAVANTE DESIGNADO REPRESENTANTE</strong>, e do
        outro lado a empresa EVANDRO COMERCIAL LTDA CNPJ 06.983.931/0004-86 e
        Insc. Estadual 19.473.228-2, localizada na Av. Dr. João Silva Filho, nº
        5125 B. Piauí, representadas neste ato por seu sócio administrador,
        EVANDRO DE SOUSA BRITO, portador do CPF nº 352.537.623-53 e Carteira de
        Identidade nº 955328 SSP-PI, doravante designada REPRESENTADA, tem entre
        si justos e pactuado o que segue, em consonância com as Leis Federais
        4.886/65 e 8.420/92.
      </ContentTopic>
      <Topic>CLÁUSULA PRIMEIRA – DO OBJETO CONTRATUAL</Topic>
      <ContentTopic>
        O Objeto contratual é a intermediação de negócios mercantis, em
        conformidade com art. 1º da Lei 4.886/65, visando a venda de produtos do
        ramo comercial da REPRESENTADA, que é o{" "}
        <strong>
          <i>
            <u>
              atacado de secos e molhados, compreendendo gêneros alimentícios,
              latarias, limpeza doméstica, perfumarias, medicamentos, miudezas,
              etc
            </u>
          </i>
        </strong>
        ., utilizando-se de listas de preços fornecidas previamente pela
        REPRESENTADA e em consonância com as condições de comercialização
        previamente estabelecidas.
      </ContentTopic>
      <ContentTopic>
        <strong>Parágrafo Único</strong> - A REPRESENTADA poderá, a qualquer
        tempo, alterar suas listas de preços, diretivas e condições de
        comercialização, independentemente de concordância do REPRESENTANTE,
        revogando, destarte, a anterior no que for incompatível.
      </ContentTopic>
      <Topic>CLÁUSULA SEGUNDA – DO PRAZO</Topic>
      <ContentTopic>
        O presente Contrato de Representação Comercial é firmado,{" "}
        <strong>
          <u>
            <i>sem vínculo empregatício</i>
          </u>
        </strong>{" "}
        e na forma estabelecida pelas Leis Federais nº 4.886, de 09 de dezembro
        de 1.965, e 8.420 de 08 de maio de 1992, por prazo indeterminado,
        conforme faculta o <strong>art. 27, alínea “c” </strong> , tendo seu
        início na data da assinatura deste Instrumento.
      </ContentTopic>
      <Topic>CLÁUSULA TERCEIRA – DA ZONA DE ATUAÇÃO</Topic>
      <ContentTopic>
        O REPRESENTANTE prestará os serviços aqui pactuados, sem caráter de
        exclusividade, nas praças de Agua Branca, Amarante, Angical do Piauí,
        Jardim do Mulato, Oeiras, Palmeiras e Regeneração à sua conveniência,
        designar outros Contratados para atuarem nesta mesma zona de atuação, em
        consonância com o{" "}
        <strong>art. 27, alíneas “d” e “e”, da Lei 4.886/65</strong>.
      </ContentTopic>
      <ContentTopic>
        <strong>Parágrafo Único</strong> - O REPRESENTANTE{" "}
        <strong>
          <u>
            <i>não terá exclusividade em sua zona de atuação</i>
          </u>
        </strong>{" "}
        e, por conseguinte, não fará jus à comissão pelos negócios ali
        realizados diretamente pela REPRESENTADA ou por outros Contratados,
        conforme estabelecido no{" "}
        <strong>art. 31 e seu parágrafo único, da Lei 4.886/65</strong>.
      </ContentTopic>
      <Topic>CLÁUSULA QUARTA – DAS COMISSÕES DO REPRESENTANTE</Topic>
      <ContentTopic>
        A REPRESENTANTE terá direito a uma comissão em conformidade com o{" "}
        <strong>art. 32, parágrafo 4º, da Lei 4.886/65</strong>, que variará de
        produto para produto, em torno{" "}
        <strong>
          <i>
            <u>
              de 1% (um por cento) à 3% (três por cento), não ultrapassando a 3%
              (três por cento)
            </u>
          </i>
        </strong>
        .
      </ContentTopic>
      <ContentTopic>
        <strong>§ 1º</strong> - As comissões das mercadorias de que trata o
        caput desta cláusula, oscilarão, segundo as necessidades da
        REPRESENTADA, com base nos seus custos e aceitação no mercado de cada
        produto.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 2º</strong> - A apuração das comissões dos pedidos
        transmitidos à REPRESENTADA, efetivamente faturados, entregues e
        liquidadas, sendo que o valor apurado será levado a crédito do
        REPRESENTANTE mensalmente no prazo previsto no{" "}
        <strong>art. 32, parágrafo 1º, da Lei nº 8.420/92</strong>, mediante
        apresentação de Nota Fiscal de Serviços no valor das respectivas
        comissões. A REPRESENTADA poderá deduzir do montante os adiantamentos ou
        quaisquer outros débitos porventura existentes e de responsabilidade
        deste.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 3º</strong> - A REPRESENTADA somente repassará ao
        REPRESENTANTE as comissões referentes aos boletos já liquidados e os
        ainda não liquidados somente serão pagas no mês em que o mesmos forem
        liquidados.
      </ContentTopic>
      <Topic>CLÁSULA QUINTA – DOS PEDIDOS DE VENDAS</Topic>
      <ContentTopic>
        A transmissão dos pedidos à REPRESENTADA se dará através de sistema
        apropriado (fax), ou sistema eletrônico, quando disponibilizado pela
        REPRESENTADA, sendo as chamadas telefônicas a cobrar de forma
        automática.
      </ContentTopic>
      <ContentTopic>
        <strong>Parágrafo Único</strong> - A REPRESENTADA poderá, na forma do
        art. 33, da Lei 4.886/65, exercer seu direito de recusa dos pedidos
        angariados pelo REPRESENTANTE, no prazo de 30 (trinta) dias a contar da
        data de recebimento dos referidos pedidos em seu estabelecimento
        comercial, não assistindo ao mesmo direito às respectivas comissões ou a
        qualquer outra retribuição.
      </ContentTopic>
      <Topic>CLÁUSULA SEXTA – DAS OBRIGAÇÕES DO REPRESENTANTE</Topic>
      <ContentTopic>Obriga-se o REPRESENTANTE a:</ContentTopic>
      <ListOrder>
        <li>
          Fornecer à REPRESENTADA por escrito, quando solicitado e até o último
          dia útil de cada mês, informações detalhadas sobre o andamento dos
          negócios a seu cargo, pelo estabelecido no{" "}
          <strong>art. 28, da Lei 4.886/65</strong>;
        </li>
        <li>
          Manter alto padrão de ética profissional e comercial, especialmente
          nas relações com cliente;
        </li>
        <li>Não violar sigilo profissional;</li>
        <li>
          Não praticar atos que importem em descrédito comercial da
          REPRESENTADA;
        </li>
        <li>
          Cumprir com todas as obrigações tributárias e fiscais, pagando
          tempestivamente os tributos devidos, bem como a contribuição anual ao
          Conselho Regional de Representantes Comerciais;
        </li>
        <li>
          Apresentar à REPRESENTADA, sempre que solicitado, comprovante de
          regularidade fiscal, bem como de regularidade perante o Conselho
          Regional de Representantes Comerciais;
        </li>
        <li>
          Não receber valores de clientes para pagamento de quaisquer débitos
          destes com a REPRESENTADA, salvo mediante autorização prévia e escrita
          desta;
        </li>
        <li>Cumprir todas as obrigações inerentes ao presente contrato.</li>
      </ListOrder>
      <ContentTopic>
        <strong>Parágrafo Único</strong> – O REPRESENTANTE dedicar-se à
        representação com zelo e lealdade, de modo a expandir os negócios da
        REPRESENTADA, de prestar as informações que lhe forem solicitadas sobre
        o andamento dos negócios a seu cargo, na forma do{" "}
        <strong>art. 28</strong> e ainda aqueles previstos no{" "}
        <strong>art. 38, da Lei 4.886/65</strong>, não desclassifica a relação
        de representação comercial em relação de emprego.
      </ContentTopic>
      <Topic>CLÁUSULA SÉTIMA – DAS OBRIGAÇÕES DA REPRESENTADA</Topic>
      <ContentTopic>Obriga-se a REPRESENTADA a:</ContentTopic>
      <ListOrder>
        <li>
          pagar as comissões do REPRESENTANTE, na forma e prazos na Cláusula
          Quarta;
        </li>
        <li>
          fornecer ao REPRESENTANTE a lista de preços, diretivas e condições de
          comercialização de seus produtos;
        </li>
      </ListOrder>
      <Topic>CLÁUSULA OITAVA – DOS MOTIVOS DA RESCISÃO</Topic>
      <ContentTopic>
        Constituem motivos justos para rescisão do Contrato de Representação
        Comercial os elencados nas{" "}
        <strong>alíneas dos arts. 35 e 36, da Lei 4.886/65</strong>, com exceção
        do motivo expresso na{" "}
        <strong>alínea “b” do art. 36 da mesma Lei</strong>, visto não existir
        exclusividade na zona de atuação, conforme disposto na Cláusula
        Terceira.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 1º</strong> - Considerar-se-á desídia do REPRESENTANTE no
        cumprimento das obrigações decorrentes do presente Contrato, consoante{" "}
        <strong>art. 35, alínea “a” da Lei 4.886/65</strong>, a negligência
        contumaz, reveladora de contínuos e injustos desleixos, oriunda da
        ociosidade, da negligência contínua, permanente do REPRESENTANTE, de
        modo a causar transtornos no andamento dos negócios, impedindo seu
        desenvolvimento e sucesso.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 2º</strong> - A prática de todos e quaisquer atos pela
        REPRESENTANTE que importem em descrédito comercial da REPRESENTADA,
        agindo assim, aquela em distonia com a preservação dos clientes,
        ensejará a rescisão do presente Contrato por justo motivo pela
        REPRESENTADA, conforme disposto no{" "}
        <strong>art. 35, alínea “b”, da Lei 4.886/65</strong>.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 3º</strong> - Será também justo motivo para rescisão do
        presente Contrato pela REPRESENTADA, a cassação do registro profissional
        do Representante Comercial pelo Conselho Regional de Representantes
        Comerciais, bem como o descumprimento ou cumprimento irregular de
        quaisquer obrigações inerentes à representação, expressas neste
        instrumento ou previstas na legislação, consoante disposto no{" "}
        <strong>art. 35, alínea “c”, da Lei 4.886/65</strong>.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 4º</strong> - A REPRESENTADA poderá ainda, por força maior,
        rescindir o presente Contrato por justo motivo, consoante disposto no{" "}
        <strong>art. 35, alínea “e”, da Lei 4.886/65</strong>.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 5º</strong> - A declaração judicial da falência do
        REPRESENTANTE, ensejará também a rescisão do presente Contrato, por
        justo motivo, pela REPRESENTADA.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 6º</strong> - A rescisão do presente Contrato por iniciativa
        da REPRESENTADA, fora dos casos previstos no{" "}
        <strong>art. 35, da Lei 4.886/65</strong> e expressos neste instrumento,
        importará no pagamento de indenização ao REPRESENTANTE no valor
        correspondente a 1/12 (um doze avos) do total das comissões auferidas
        durante o tempo de exercício da representação em consonância com{" "}
        <strong>art. 27, alínea “j”, da Lei 4.886/65</strong>.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 7º</strong> - Não terá direito o REPRESENTANTE à indenização
        de 1/12 (um doze avos) quando este denunciar sem justo motivo o presente
        Contrato, podendo ainda a REPRESENTADA, pleitear indenização por perdas
        e danos, na forma da Lei.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 8º</strong> - Ocorrendo motivos justos para a rescisão do
        Contrato, poderá da REPRESENTADA reter comissões devidas ao
        REPRESENTANTE, com o fim de ressarcir-se de danos por esta causados, bem
        assim, nas hipóteses previstas no <strong>art.35</strong>, a título de
        compensação, como permitido pelo{" "}
        <strong>art. 37, da Lei 4.886/65</strong>, sem prejuízo das sanções
        legais e contratuais cabíveis.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 9º</strong> - A denúncia, por qualquer das partes, deste
        Contrato sem motivo justo e que haja vigorado por mais de 6 (seis)
        meses, obriga o denunciante à concessão de pré-aviso, com antecedência
        mínima de 30 (trinta) dias ou ao pagamento da importância igual a 1/3
        (um terço) das comissões auferidas pelo REPRESENTANTE nos 3 (três) meses
        anteriores, conforme previsto no{" "}
        <strong>art. 34, da Lei 4.886/65</strong>.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 10º</strong> - Será também motivo justo para rescisão deste
        contrato, o uso do nome e crédito de clientes para adquirir mercadorias
        para seu uso ou revenda a terceiros.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 11º</strong> - Apurada a irregularidade prevista no parágrafo
        10º desta cláusula o representante responderá civil e criminalmente pelo
        ato ilícito, bem como pagará todos os prejuízos e danos causados, tanto
        financeiros quanto morais.
      </ContentTopic>
      <Topic>CLÁUSULA NONA – DA REPRESENTAÇÃO NÃO EXCLUSIVA</Topic>
      <ContentTopic>
        O REPRESENTANTE poderá exercer suas atividades para outras empresas ou
        efetuar negócios em seu nome e por conta própria, desde que não se trate
        de atividade que resulte concorrência à REPRESENTADA, em consonância com{" "}
        <strong>art. 41, Lei 8420/92</strong>.
      </ContentTopic>
      <Topic>CLÁUSULA DÉCIMA – DAS DISPOSIÇÕES GERAIS</Topic>
      <ContentTopic>
        O REPRESENTANTE não poderá conceder prazos, abatimentos, descontos e nem
        agir em desacordo com as instruções comerciais da REPRESENTADA, salvo se
        houver autorização por escrito desta para cada caso, nos termos do{" "}
        <strong>art. 29 da Lei nº 4.886/65</strong>.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 1º</strong> - As despesas iniciais necessárias ao exercício da
        representação comercial ora concedida, ligadas à locomoção, hospedagem,
        refeições, telegramas, sedex, selos, etc., correm por conta exclusiva da
        REPRESENTANTE.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 2º</strong> - A REPRESENTANTE não estará obrigada a cumprir ou
        acatar normas e instruções que contrariem as leis nº 4.886/65 e nº
        8.420/92, pelo que inexistirá entre as partes qualquer subordinação
        hierárquica, ficando as mesmas subordinadas apenas às determinações
        legais e contratuais.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 3º</strong> - O presente Contrato não poderá ser cedido ou
        transferido a terceiros, salvo com anuência expressa da REPRESENTADA.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 4º</strong> - Os casos omissos neste contrato serão regulados
        pelos preceitos da Lei Federal nº 4.886/65, com a nova redação da Lei
        8.420/92, pelo Código Comercial e pelos princípios gerais de Direito.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 5º</strong> - Toda e qualquer tolerância quanto ao cumprimento
        por qualquer das partes, das condições estabelecidas no presente
        Contrato, não significará novação ou alteração das disposições ora
        pactuadas, mas tão somente liberalidade.
      </ContentTopic>
      <ContentTopic>
        <strong>§ 6º</strong> - A REPRESENTANTE, neste ato e na melhor forma de
        direito, fica expressamente proibido de utilizar o nome ou a logomarca
        da REPRESENTADA em folhetos, materiais publicitários ou em qualquer
        outra forma de divulgação, sem a prévia e escrita autorização desta, sob
        pena de rescisão do Contrato de Representação Comercial, sem prejuízo
        quanto a responsabilidade por perdas e danos.
      </ContentTopic>
      <ContentTopic>
        <strong>
          § 7º - É permitido ao REPRESENTANTE contratar sub-representantes (tipo
          preposto) para o fiel desempenho deste contrato, hipótese em que
          responderá diretamente por todas as obrigações alusivas a essas
          contratações na conformidade com o disposto no Artigo 42 e seus
          parágrafos da Lei 8.420 de 06.05.92, Parágrafo único – Em caso da
          contratação permitida nesta cláusula, nenhuma relação haverá entre a
          REPRESENTADA e os SUB -Representantes contratados, que estarão
          vinculados juridicamente apenas ao REPRESENTANTE.
        </strong>
      </ContentTopic>
      <Topic>CLÁUSULA DÉCIMA PRIMEIRA – DO FORO</Topic>
      <ContentTopic>
        Em consonância com o disposto no art. 39 da Lei 4.886/65, fica eleito o
        foro da comarca Parnaíba - PI, para dirimir, através da JUSTIÇA COMUM,
        as dúvidas ou questões que resultarem do presente Contrato, renunciando
        a qualquer outro, por mais privilegiado que seja.
      </ContentTopic>
      <ContentTopic>
        E por estarem justas e pactuadas, REPRESENTANTE E REPRESENTADA firmam o
        presente instrumento de comum acordo, sem coação, reserva ou ressalva,
        em 02 (duas) vias de igual teor e forma, perante as testemunhas abaixo,
        a tudo presente, para que jurídicos e legais efeitos.
      </ContentTopic>
      <br />
      <br />

      <DateDocument>{datePerExtension()}</DateDocument>

      <br />
      <br />
      <Topic>
        <div>
          <span>________________________________________</span>
          <span>________________________________________</span>
        </div>
      </Topic>
      <Topic style={{ fontWeight: "normal" }}>
        <div>
          <span>{rca}</span>
          <span>EVANDRO COMERCIAL LTDA</span>
        </div>
      </Topic>
      <br />

      <Topic style={{ fontWeight: "normal", marginLeft: 40 }}>
        Testemunhas:
      </Topic>
      <Topic>
        <div>
          <span>________________________________________</span>
          <span>________________________________________</span>
        </div>
      </Topic>

      <Topic style={{ fontWeight: "normal", marginBottom: 1 }}>
        <div>
          <span>NOME:_________________________________</span>
          <span>NOME:_________________________________</span>
        </div>
      </Topic>
      <Topic style={{ fontWeight: "normal" }}>
        <div>
          <span>CPF :___________________________________</span>
          <span>CPF :___________________________________</span>
        </div>
      </Topic>
    </Container>
  );
}

export default Contract_pf;
