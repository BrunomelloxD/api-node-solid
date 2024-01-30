import * as z from 'zod'

const AssinanteSchema = z.object({
    id: z.number().nullable(),
    nome: z.string().max(100),
    cpf_cnpj: z.string(),
    rg_ie: z.string(),
    dataNascimento: z.string(),
    sexo: z.string().nullable(),
    estadoCivil: z.string().nullable(),
    idProfissao: z.number().nullable(),
    nomeMae: z.string(),
    nomePai: z.string(),
    nomeFantasia: z.string().nullable()
})

const EnderecoSchema = z.object({
    idcidade: z.number(),
    idlogradouro: z.number(),
    idcep: z.number(),
    idunidadegrupoendereco: z.number().nullable(),
    numero: z.number().nullable(),
    complemento: z.string().nullable(),
    condominio_edificio: z.string().nullable(),
    bloco: z.string().nullable(),
    apartamento: z.string().nullable()
})

const PacoteSchema = z.object({
    idPacoteTabela: z.number()
})

const ContratoSchema = z.object({
    idTipoContrato: z.number(),
    idTipoCaptacao: z.number(),
    idCarteira: z.number(),
    idCaptador: z.number().nullable(),
    cpfCaptador: z.string(),
    diaVencimento: z.number(),
    formaPagamento: z.number(),
    numeroBanco: z.number(),
    agenciaDebito: z.number().nullable(),
    contaDebito: z.number().nullable(),
    titularContaDebito: z.string().nullable(),
    cpfTitularContaDebito: z.string().nullable(),
    enviarPorEmail: z.number(),
    faturaImpressa: z.number(),
    observacao: z.string(),
    idTerceiros: z.number()
})

const EmailSchema = z.object({
    email: z.string(),
    principal: z.boolean()
})

const TelefoneSchema = z.object({
    ddd: z.string(),
    numero: z.string(),
    tipo: z.number(),
    principal: z.boolean(),
    whatsapp: z.boolean(),
    sms: z.boolean()
})

const AditivoSchema = z.object({
    idAditivo: z.number()
})

const DocumentosSchema = z.object({
    nomeArquivo: z.string(),
    arquivo: z.string()
})

export const ContractTypeSchema = z.object({
    idOferta: z.number().nullable(),
    assinante: AssinanteSchema,
    endereco: EnderecoSchema,
    enderecoCobranca: EnderecoSchema,
    pacotes: z.array(PacoteSchema),
    contrato: ContratoSchema,
    emails: z.array(EmailSchema),
    telefones: z.array(TelefoneSchema),
    aditivos: z.array(AditivoSchema),
    documentos: z.array(DocumentosSchema),
    latitude: z.number().optional(),
    longitude: z.number().optional()
})
