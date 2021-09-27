let regras = "\n1- tesoura corta papel \n2- papel cobre veneno \n3- pedra esmaga lagarto \n4- lagarto corta Spock \n5- Spock vaporiza tesoura \n6- tesoura decapita Spock \n7- lagarto come papel \n8- veneno refuta lagarto \n9- Spock vaporiza pedra \n10-veneno esmaga tesoura \n"

regras = regras.replace("esmaga","quebra")
regras = regras.replace("esmaga","quebra")

regras = regras.replace("lagarto","tesoura")
regras = regras.replace("lagarto","tesoura")
regras = regras.replace("lagarto","tesoura")
regras = regras.replace("lagarto","tesoura")

regras = regras.replace("Spock","papel")
regras = regras.replace("Spock","papel")
regras = regras.replace("Spock","papel")
regras = regras.replace("Spock","papel")

regras = regras.replace("vaporiza","embrulha")
regras = regras.replace("vaporiza","embrulha")

regras = regras.replace("cobre","embrulha")

regras = regras.replace("decapita","corta")

regras = regras.replace("come","corta")

regras = regras.replace("veneno","pedra")
regras = regras.replace("veneno","pedra")
regras = regras.replace("veneno","pedra")

regras = regras.replace("refuta","quebra")


console.log(regras)
