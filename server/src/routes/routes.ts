import express from 'express';

import nodemailer from 'nodemailer';
import { PrismaFeedbacksRepository } from '../repositories/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case';

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
    const {type, comment, screenshot} = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository);

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send();
})