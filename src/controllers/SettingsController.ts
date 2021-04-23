import { Request, response, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    private settingsService = new SettingsService();

    async create(req: Request, res: Response) {
        
        const {chat, username} = req.body;

        
        try {
            const settings = await this.settingsService.create({ chat, username });
            return res.json(settings);
        } catch(err) {
            res.status(400).json({ message: err.message })
        }
    }

    async findByUserName(req: Request, res: Response) {
        const { username } = req.params;

        const settings = await this.settingsService.findByUserName(username);

        return res.json(settings);
    }

    async update(req: Request, res: Response) {
        const { username } = req.params;
        const { chat } = req.body;

        const settings = await this.settingsService.update(username, chat);

        return res.json(settings);
    }
}

export {SettingsController}