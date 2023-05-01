import { ChanMessage, Channel, Restriction, User } from "src/database";
import { ChannelData } from "src/utils/types";
import { Repository } from "typeorm";
import { NotifService } from "src/users/notifs.service";
export declare class ChannelService {
    private chanRepo;
    private msgRepo;
    private userRepo;
    private restrictionRepo;
    private readonly notifService;
    constructor(chanRepo: Repository<Channel>, msgRepo: Repository<ChanMessage>, userRepo: Repository<User>, restrictionRepo: Repository<Restriction>, notifService: NotifService);
    findChannel(name: string, type: string): Promise<Channel>;
    findChannelById(id: number): Promise<Channel>;
    getChannelWithUsers(id: number): Promise<Channel>;
    getPublicChannels(): Promise<Channel[]>;
    getPrivateChannels(userId: number): Promise<{
        password: any;
        id: number;
        socketId: string;
        name: string;
        type: string;
        owner: User;
        users: User[];
        admins: User[];
        banned: Restriction[];
        muted: Restriction[];
        messages: ChanMessage[];
    }[]>;
    getChannels(userId: number): Promise<Channel[]>;
    checkChanData(chanData: ChannelData): Promise<"invalid channel name" | "invalid password">;
    checkChanPassword(pass: string, cryptedPass: string): Promise<boolean>;
    setChanPassword(channel: Channel, pass: string): Promise<Channel>;
    removeChanPassword(channel: Channel): Promise<Channel>;
    setChanOwner(user: User, channel: Channel): Promise<Channel>;
    addUserChan(user: User, chan: Channel, role: string): Promise<Channel>;
    createChannel(chanData: ChannelData): Promise<Channel>;
    findUserInChan(userId: number, channel: Channel): false | User;
    removeUserChan(user: User, chan: Channel): Promise<Channel>;
    deleteChan(chan: Channel): Promise<void>;
    leaveChan(user: User, chan: Channel): Promise<Channel>;
}
