function testar(nomeDoTeste, funcaoDeTeste) {
        try {
        funcaoDeTeste();
        console.log (`✅ ${nomeDoTeste}\n`);
    } catch (erro) {
        console.log(`❌ ${nomeDoTeste} - ${erro.message}\n`);
    }
}
