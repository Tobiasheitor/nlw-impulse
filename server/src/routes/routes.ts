import express from 'express';

import nodemailer from 'nodemailer';
import { prisma } from '../prisma';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "c7faa9cba56535",
        pass: "9b2e2936ad4c70"
    }
});

routes.post('/feedbacks', async (req, res) => {

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Tobias Heitor <tobias.goettert@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do Feedback: ${type}</p>`,
            `<p>Comentário: \"${comment}\"</p>`,
            `</div>`,
        ].join('\n')
    });

    return res.status(201).json( { data: feedback } );
})