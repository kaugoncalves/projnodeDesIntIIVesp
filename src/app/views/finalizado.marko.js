// Compiled using marko@4.23.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodemat$1.0.0/src/app/views/finalizado.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Lista dos Clientes com Node.js</title><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css></head><body style=\"background-color: rgb(41, 41, 41);; font-family: 'Exo', sans-serif; \">");

  if (data.erro) {
    out.w("<script>\r\n        alert(\"Senha ou Usuário inválido\")\r\n      </script> ");
  }

  out.w("<nav class=\"navbar navbar-light bg-dark\"><a class=navbar-brand href=/pagInicial><p class=\"text-white bg-dark\"><img src=https://st2.depositphotos.com/1340907/6714/v/950/depositphotos_67149235-stock-illustration-pixel-sad-face-icon.jpg width=30 height=30 class=\"d-inline-block align-left\" alt loading=lazy> Cabeçudinho Store</p> </a></nav><div class=\"container mx-auto \"> <div class=mx-auto style=\"width: 1200px; height: 1000px font-size: 60px \"><h1 style=color:white>ㅤㅤ Compra realizada com <a style=color:yellow> sucesso!</a> Agradecemos a <a style=color:yellow> preferência </a> </h1><img src=https://greenpng.com/wp-content/uploads/2020/07/1593575905883.png width=400 height=400 class=\"d-inline-block align-top\" alt loading=lazy><img src=https://st2.depositphotos.com/1340907/6714/v/950/depositphotos_67149235-stock-illustration-pixel-sad-face-icon.jpg width=400 height=400 class=\"d-inline-block align-left\" alt loading=lazy></div> </div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "17");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnodemat$1.0.0/src/app/views/finalizado.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
